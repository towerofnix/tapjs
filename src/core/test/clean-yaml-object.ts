import {
  at,
  CallSiteLike,
  CallSiteLikeJSON,
  captureString,
} from '@tapjs/stack'
import t from 'tap'
import { cleanYamlObject } from '../dist/esm/clean-yaml-object.js'

t.cleanSnapshot = s =>
  s
    .replace(/lineNumber: [0-9]+/g, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/g, 'columnNumber: ##')
    .replace(/"lineNumber": [0-9]+/g, '"lineNumber": ##')
    .replace(/"columnNumber": [0-9]+/g, '"columnNumber": ##')

t.matchSnapshot(cleanYamlObject({}), 'empty object')

t.strictSame(
  cleanYamlObject({
    at: [],
    context: {},
    runOnly: null,
  }),
  {},
  'deleteIfEmpty fields'
)

t.test('callsite reporting', t => {
  const stack = captureString()
  const b = cleanYamlObject({
    stack: stack.trimEnd().split('\n'),
  })
  t.matchOnly(
    b,
    {
      stack: b.stack,
      at: {
        columnNumber: Number,
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: Number,
        methodName: '<anonymous>',
        typeName: 'Test',
        functionName: 'Test.<anonymous>',
      },
      source: String,
    },
    'handle array stacks that tap used to use long ago'
  )
  const c = cleanYamlObject({
    stack,
  })
  t.matchOnly(c, {
    stack: String,
    at: {
      columnNumber: Number,
      fileName: 'test/clean-yaml-object.ts',
      lineNumber: Number,
      methodName: '<anonymous>',
      typeName: 'Test',
      functionName: 'Test.<anonymous>',
    },
    source: String,
  })
  t.matchSnapshot(c.source)
  const a = at()
  const d = cleanYamlObject({ at: a })
  t.matchOnly(d, {
    source: String,
    at: a?.toJSON(),
  })
  t.matchSnapshot(d.source)
  t.matchSnapshot(
    cleanYamlObject({
      at: new CallSiteLike(
        null,
        '    at Fake.foo() (this file does not exist:420:69)'
      ),
    }),
    'invalid callsite is fine'
  )
  const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
  nc.columnNumber = Infinity
  t.matchSnapshot(
    cleanYamlObject({
      no: 'caret',
      at: nc,
    }),
    'no caret'
  )
  t.end()
})

t.test('callsite reporting with error origin', t => {
  const originStack = captureString()
  // just a line here so it's clearly not the same
  const stack = captureString()
  const b = cleanYamlObject({
    stack: stack.trimEnd().split('\n'),
    errorOrigin: {
      stack: originStack.trimEnd().split('\n'),
    },
  })
  t.matchOnly(
    b,
    {
      stack: b.stack,
      at: {
        columnNumber: Number,
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: Number,
        methodName: '<anonymous>',
        typeName: 'Test',
        functionName: 'Test.<anonymous>',
      },
      source: String,
      errorOrigin: {
        stack: b.errorOrigin.stack,
        at: {
          columnNumber: Number,
          fileName: 'test/clean-yaml-object.ts',
          lineNumber: Number,
          methodName: '<anonymous>',
          typeName: 'Test',
          functionName: 'Test.<anonymous>',
        },
        source: String,
      },
    },
    'handle array stacks that tap used to use long ago'
  )

  const c = cleanYamlObject({
    stack,
    errorOrigin: { stack: originStack },
  })
  t.matchOnly(c, {
    stack: String,
    at: {
      columnNumber: Number,
      fileName: 'test/clean-yaml-object.ts',
      lineNumber: Number,
      methodName: '<anonymous>',
      typeName: 'Test',
      functionName: 'Test.<anonymous>',
    },
    source: String,
    errorOrigin: {
      stack: String,
      at: {
        columnNumber: Number,
        fileName: 'test/clean-yaml-object.ts',
        lineNumber: Number,
        methodName: '<anonymous>',
        typeName: 'Test',
        functionName: 'Test.<anonymous>',
      },
      source: String,
    },
  })
  t.matchSnapshot(c.source)
  t.matchSnapshot(c.errorOrigin.source)
  const a = at()
  // just a line so they're clearly different
  const oat = at()
  const d = cleanYamlObject({ at: a, errorOrigin: { at: oat } })
  t.matchOnly(d, {
    source: String,
    at: a?.toJSON(),
    errorOrigin: {
      source: String,
      at: oat?.toJSON(),
    },
  })
  t.matchSnapshot(d.source)
  t.matchSnapshot(d.errorOrigin.source)
  t.matchSnapshot(
    cleanYamlObject({
      at: new CallSiteLike(
        null,
        '    at Fake.foo() (this file does not exist:420:69)'
      ),
      errorOrigin: new CallSiteLike(
        null,
        '    at Fake.errorOrigin() (other not exist file:420:69)'
      ),
    }),
    'invalid callsite is fine'
  )
  const nc: CallSiteLike | CallSiteLikeJSON = at() || {}
  nc.columnNumber = Infinity
  const onc: CallSiteLike | CallSiteLikeJSON = at() || {}
  onc.columnNumber = Infinity
  t.matchSnapshot(
    cleanYamlObject({
      no: 'caret',
      at: nc,
      errorOrigin: { at: onc },
    }),
    'no caret'
  )
  t.end()
})

t.test('diffs', t => {
  t.matchSnapshot(
    cleanYamlObject({
      found: 'hello\nworld',
      wanted: 'helper\nworld',
    }),
    'string comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 'hello\nworld',
      wanted: 123,
    }),
    'string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 123,
      wanted: 'hello\nworld',
    }),
    'string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: '123',
      wanted: 123,
    }),
    'matching string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: 123,
      wanted: '123',
    }),
    'matching string/number comparison'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: { a: 1 },
      wanted: { b: 2 },
    }),
    'differently shaped objects'
  )
  t.matchSnapshot(
    cleanYamlObject({
      found: { a: 1 },
      wanted: { a: 1 },
    }),
    'matching unique objects'
  )
  const a = { a: 1 }
  t.matchSnapshot(
    cleanYamlObject({
      found: a,
      wanted: a,
    }),
    'identical objects'
  )
  t.end()
})

t.test('pruning keys', t => {
  t.strictSame(
    cleanYamlObject({
      todo: true,
      skip: 'some skip message',
      childId: 123,
      cb: 'anything',
      name: 'name',
      indent: 99,
      bail: true,
      parent: { name: 'parent' },
      buffered: { banana: 'stand' },
      grep: '/apple/',
      grepInvert: true,
      only: true,
      saveFixture: true,
      env: process.env,
      at: {},
      stack: '',
      context: null,
      runOnly: false,
      compareOptions: {},
      _tapChildBlah: 'blerg',
      tapChildKey: '123',
      tapMochaTest: t,
    }),
    {}
  )

  t.end()
})

t.test('elide inline t.worker code', t => {
  t.strictSame(
    cleanYamlObject({
      eval: true,
      filename: 'some\ninline\ncode',
    }),
    { eval: true, filename: '<inline code>' }
  )
  t.end()
})

t.test('do not delete non-string message', t => {
  t.strictSame(cleanYamlObject({ message: true }), { message: true })
  t.strictSame(cleanYamlObject({ message: 'x' }), {})
  t.end()
})

t.test('normalize stack line ending', t => {
  const st = new Error('test')
    .stack!.split('\n')
    .slice(1)
    .join('\n')
    .trimEnd()
  t.equal(
    cleanYamlObject({ at: null, stack: st }).stack.endsWith('\n'),
    true
  )
  t.end()
})

t.test('clean cause & errors recursively', t => {
  t.matchOnly(
    cleanYamlObject({
      code: 'e_that_and_this',
      cause: {
        code: 'e_this_and_that',
        cause: { found: 'foo', wanted: 'bar' },
      },
    }),
    {
      code: 'e_that_and_this',
      cause: {
        code: 'e_this_and_that',
        cause: { diff: String },
      },
    },
    'deeply nested cause'
  )

  t.matchOnly(
    cleanYamlObject({
      errors: [
        {
          errors: [
            { found: 'foo', wanted: 'bar' },
            { found: 'bim', wanted: 'bam' },
          ],
        },
        { found: 'buzz', wanted: 'burr' },
      ],
    }),
    {
      errors: [
        {
          errors: [{ diff: /bar.*foo/s }, { diff: /bam.*bim/s }],
        },
        { diff: /burr.*buzz/s },
      ],
    },
    'deeply nested errors'
  )

  t.matchOnly(
    cleanYamlObject({
      cause: {
        errors: [
          {
            cause: { found: 123, wanted: 234 },
          },
          {
            errors: [
              {
                cause: { found: 2002, wanted: 3005 },
              },
              { found: 575, wanted: 400 },
            ],
          },
        ],
      },
    }),
    {
      cause: {
        errors: [
          {
            cause: { diff: /234.*123/s },
          },
          {
            errors: [
              { cause: { diff: /3005.*2002/s } },
              { diff: /400.*575/s },
            ],
          },
        ],
      },
    },
    'mixed nesting of cause & errors'
  )

  t.matchOnly(
    cleanYamlObject({
      cause: {
        cause: { found: 1000, wanted: 25 },
        errors: [{ found: 600, wanted: 12 }],
      },
    }),
    {
      cause: {
        cause: { diff: String },
        errors: [{ diff: String }],
      },
    },
    'recurses cause & errors on same object'
  )

  t.end()
})

t.test('cause & errors unfamiliar type handling', t => {
  t.strictSame(
    cleanYamlObject({ cause: 'Something has gone terribly wrong.' }),
    { cause: 'Something has gone terribly wrong.' },
    'preserves non-object cause as-is'
  )

  t.strictSame(
    cleanYamlObject({ errors: 'What a concept' }),
    { errors: 'What a concept' },
    'preserves non-array (string) errors as-is'
  )

  t.strictSame(
    cleanYamlObject({
      errors: {
        kind: 'panic',
        message: 'Oh dear, oh dear.',
        found: 'bim',
        wanted: 'bam',
      },
    }),
    {
      errors: {
        kind: 'panic',
        message: 'Oh dear, oh dear.',
        found: 'bim',
        wanted: 'bam',
      },
    },
    'preserves non-array (object) errors as-is'
  )

  t.strictSame(
    cleanYamlObject({
      errors: ['apple', false],
    }),
    {
      errors: ['apple', false],
    },
    'preserves non-object errors items as-are'
  )

  t.matchOnly(
    cleanYamlObject({
      errors: [
        'spoooky',
        'skeletons',
        { found: 12, wanted: 13 },
        12345,
      ],
    }),
    {
      errors: ['spoooky', 'skeletons', { diff: String }, 12345],
    },
    'recurses object errors item alongside non-objects'
  )

  t.end()
})
