// @tapjs/stack makes stack traces a bit nicer, but we can do even better
// with some colors and highlighting.

import { CallSiteLike, parseStack } from '@tapjs/stack'
import chalk from 'chalk'
import { Box, Text } from 'ink'
import { isAbsolute } from 'path'
import React, { FC } from 'react'
import { HangingIndent } from './hanging-indent.js'

// only show generated callsite info if it's not ours
// it's useful to know where to start throwing console.logs, but
// if it's our own code, it's just noise.
// Treat ./node_modules as "absolute" for this purpose, since deps
// aren't "local" in the same sense, even though they live in cwd.
const relativeOrMissing = (p?: string | null) =>
  !p || !(isAbsolute(p) || p.startsWith('node_modules'))
const removeRelativeGenerated = (c?: CallSiteLike | null) => {
  if (c && relativeOrMissing(c.fileName)) c.generated = undefined
}

// Only highlight *our* filenames, not those from deps or outside paths.
// We use chalk.dim() directly here, because neighboring Text nodes get
// squashed together.
const highlightFilename = (s: string, f?: string | null) => {
  if (
    !f ||
    f === 'native' ||
    f === '<anonymous>' ||
    isAbsolute(f) ||
    f.startsWith('..') ||
    !s.includes(f)
  ) {
    return <Text>{chalk.dim(s)}</Text>
  }
  const split = s.split(f)
  const last = split[split.length - 1]
  split.pop()
  return (
    <Text>
      {split
        .map(s => `${chalk.dim(s)}${chalk.yellowBright(f)}`)
        .join('') + chalk.dim(last)}
    </Text>
  )
}

const formatLine = (l: string) => {
  const c = new CallSiteLike(null, l)
  removeRelativeGenerated(c)
  removeRelativeGenerated(c.evalOrigin)
  return highlightFilename(
    c.toString(),
    c.evalOrigin ? c.evalOrigin.fileName : c.fileName
  )
}

const getStackLines = (stack: string) =>
  parseStack(stack)
    .map(c => String(c))
    .join('\n')
    .replace(/\n+$/, '')
    .split('\n')

// Adapted from Node.js:
// https://github.com/nodejs/node/blob/8a41d9b636be86350cd32847c3f89d327c4f6ff7/lib/internal/util/inspect.js#L1216
const getOverlapRange = (a: any[], b: any[]): {len: number, offset: number} => {
  for (let i = 0; i < a.length - 3; i++) {
    // Find the first entry of b that matches the current entry of a.
    const pos = b.indexOf(a[i]!)
    if (pos !== -1) {
      const rest = b.length - pos
      if (rest > 3) {
        let len = 1
        const maxLen = Math.min(a.length - i, rest)
        // Count the number of consecutive entries.
        while (maxLen > len && a[i + len] === b[pos + len]) {
          len++
        }
        if (len > 3) {
          return { len, offset: i }
        }
      }
    }
  }
  return { len: 0, offset: 0 }
}

export const Stack: FC<{ stack?: string, causeStack?: string }> = ({ stack, causeStack }) => {
  if (!stack?.trim()) return <></>

  const stackLines = getStackLines(stack)

  let contentLines

  // Adapted from Node.js:
  // https://github.com/nodejs/node/blob/8a41d9b636be86350cd32847c3f89d327c4f6ff7/lib/internal/util/inspect.js#L1253
  if (causeStack?.trim()) {
    const causeLines = getStackLines(causeStack)
    const overlap = getOverlapRange(stackLines, causeLines)
    if (overlap.len > 0) {
      const firstLines = causeLines.slice(0, overlap.offset)
      const lastLines = causeLines.slice(overlap.offset + overlap.len)
      const message = `... ${overlap.len - 2} lines matching cause trace ...`
      contentLines = [
        ...firstLines.map(formatLine),
        <Text>{chalk.dim(message)}</Text>,
        ...lastLines.map(formatLine)
      ]
    }
  }

  if (!contentLines) {
    contentLines = stackLines.map(formatLine)
  }

  return (
    <Box flexDirection="column">
      {contentLines!.map((line, key) => (
        <HangingIndent key={key}>{line}</HangingIndent>
      ))}
    </Box>
  )
}
