import React, { FC } from 'react'
import { Box, Text } from 'ink'
import { Stack } from './stack.js'

export const RecursiveStack: FC<{
  why?: 'cause' | 'errors'
  current: { [k: string]: any }
}> = ({ why, current }) => {
  if (!current) return <></>

  const { message, stack, cause, errors } = current

  let header
  if (why === 'cause') {
    header = (
      <Text>
        {'- Cause:'}
        {message ? ' ' : ''}
        {message}
      </Text>
    )
  } else if (why === 'errors') {
    header = (
      <Text>
        {'- Aggregated:'}
        {message ? ' ' : ''}
        {message}
      </Text>
    )
  }

  // indent contents only if header is present
  const padding = header ? 2 : 0

  return (
    <Box flexDirection="column">
      {header}

      <Box flexDirection="column" paddingLeft={padding}>
        <Stack stack={stack} />
        <RecursiveStack why="cause" current={cause} />
      </Box>
    </Box>
  )
}
