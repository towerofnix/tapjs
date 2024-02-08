import { CallSiteLike } from '@tapjs/stack'
import t from 'tap'
import { extraFromError } from '../dist/esm/extra-from-error.js'

t.matchOnly(
  extraFromError(new Error('hello')),
  {
    at: CallSiteLike,
    stack: String,
  },
  'basic error handling, captures stack and callsite'
)

t.matchOnly(
  extraFromError('hello'),
  {
    error: 'hello',
  },
  'not an error'
)

t.matchOnly(
  extraFromError(
    Object.assign(new Error('src ctx'), {
      source: {
        code: 'some codes',
        context: { big: 'object' },
      },
    })
  ),
  {
    at: CallSiteLike,
    stack: String,
    source: { code: 'some codes' },
  },
  'remove source.context'
)

t.matchOnly(
  extraFromError(new Error('tapChild'), undefined, {
    tapChildName: 'tap child',
    tapChildAge: 7,
    other: 'thing',
  }),
  {
    at: CallSiteLike,
    stack: String,
    other: 'thing',
  },
  'remove tapChild from test options'
)

t.matchOnly(
  extraFromError(
    new Error('tapChild'),
    {
      conflict: 'from extra',
    },
    {
      tapChildName: 'tap child',
      tapChildAge: 7,
      other: 'thing',
      conflict: 'from options',
    }
  ),
  {
    at: CallSiteLike,
    stack: String,
    other: 'thing',
    conflict: 'from extra',
  },
  'remove tapChild and preexisting fields from test options'
)

t.test('custom error', t => {
  class MyError extends Error {
    name = 'MyError'
    customErrorProperty = true
  }
  const er = new MyError('some message')
  t.matchOnly(extraFromError(er), {
    at: CallSiteLike,
    stack: String,
    customErrorProperty: true,
    type: 'MyError',
  })
  t.end()
})

t.test('nameless error', t => {
  const er = new Error()
  t.matchOnly(extraFromError(er), {
    at: CallSiteLike,
    stack: String,
  })
  t.equal(er.message, '')
  t.end()
})

t.test('internal error', t => {
  const er = Object.assign(new Error('internal stuff'), {
    stack: `Error: internal stuff
    at InternalFunction (node:internal/blah:420:69)
    at node:child_process:1:3333
`,
  })
  t.matchOnly(extraFromError(er), {
    at: null,
    stack: '',
  })
  t.end()
})

t.test('find a useful call site', t => {
  let er!: Error
  try {
    //@ts-expect-error
    new Date({}).toISOString()
  } catch (e) {
    if (!(e instanceof Error)) {
      throw new Error('expected an error object to be thrown')
    }
    er = e
  }
  const ex = extraFromError(er)
  t.match(
    ex,
    {
      at: {
        constructor: CallSiteLike,
        fileName: 'test/extra-from-error.ts',
        lineNumber: Number,
        columnNumber: Number,
      },
      stack: String,
    },
    'found a useful callsite below the top site'
  )

  const notUseful = Object.assign(new Error('no good'), {
    stack: `RangeError: no good
    at Some.method (<anonymous>)
    at OtherThing (<native>)
    at whybother (<anonymous>)
    at Object.<anonymous> (<native>)
`,
  })
  const nex = extraFromError(notUseful)
  t.matchStrict(
    nex,
    {
      at: {
        constructor: CallSiteLike,
        lineNumber: null,
        columnNumber: null,
        fileName: null,
        typeName: 'Some',
        methodName: 'method (<anonymous>)',
        functionName: 'Some.method (<anonymous>)',
      },
      stack: String,
    },
    'did not find a useful site, use the top site'
  )
  t.end()
})

t.test('get extras for cause & errors recursively', t => {
  t.matchOnly(
    extraFromError(
      new Error('Oh dear', {
        cause: new Error('Oh me', {
          cause: new Error('Oh my'),
        }),
      })
    ),
    {
      at: CallSiteLike,
      stack: String,
      cause: {
        at: CallSiteLike,
        stack: String,
        cause: {
          at: CallSiteLike,
          stack: String,
        },
      },
    },
    'deeply nested cause'
  )

  t.matchOnly(
    extraFromError(
      new AggregateError([
        new AggregateError([new Error(), new TypeError()]),
        new RangeError(),
      ])
    ),
    {
      type: 'AggregateError',
      at: CallSiteLike,
      stack: String,
      errors: [
        {
          type: 'AggregateError',
          at: CallSiteLike,
          stack: String,
          errors: [
            {
              at: CallSiteLike,
              stack: String,
            },
            {
              type: 'TypeError',
              at: CallSiteLike,
              stack: String,
            },
          ],
        },
        { type: 'RangeError', at: CallSiteLike, stack: String },
      ],
    },
    'deeply nested errors'
  )

  t.matchOnly(
    extraFromError(
      new Error('Oops', {
        cause: new AggregateError([
          new Error('Alas', {
            cause: new TypeError('Woe'),
          }),
          new RangeError('Spilt Milk'),
        ]),
      })
    ),
    {
      at: CallSiteLike,
      stack: String,
      cause: {
        type: 'AggregateError',
        at: CallSiteLike,
        stack: String,
        errors: [
          {
            at: CallSiteLike,
            stack: String,
            cause: {
              type: 'TypeError',
              at: CallSiteLike,
              stack: String,
            },
          },
          {
            type: 'RangeError',
            at: CallSiteLike,
            stack: String,
          },
        ],
      },
    },
    'mixed nesting of cause & errors'
  )

  t.matchOnly(
    extraFromError(
      new Error('I know what happened!!', {
        cause: new AggregateError(
          [new Error('It was this!'), new TypeError('Also this!')],
          'Check it out!',
          {
            cause: new SyntaxError('I am the evil mastermind!!!'),
          }
        ),
      })
    ),
    {
      at: CallSiteLike,
      stack: String,
      cause: {
        type: 'AggregateError',
        at: CallSiteLike,
        stack: String,
        errors: [
          {
            at: CallSiteLike,
            stack: String,
          },
          {
            type: 'TypeError',
            at: CallSiteLike,
            stack: String,
          },
        ],
        cause: {
          type: 'SyntaxError',
          at: CallSiteLike,
          stack: String,
        },
      },
    },
    'recurses cause & errors on same object'
  )

  t.end()
})

t.test('cause & errors unfamiliar type handling', t => {
  t.matchOnly(
    extraFromError(
      new RangeError('Well, you see', {
        cause: 'Something has gone terribly wrong.',
      })
    ),
    {
      type: 'RangeError',
      at: CallSiteLike,
      stack: String,
      cause: 'Something has gone terribly wrong.',
    },
    'preserves non-object cause as-is'
  )

  t.matchOnly(
    extraFromError(
      Object.assign(new Error(), {
        errors: 'What a concept',
      })
    ),
    {
      at: CallSiteLike,
      stack: String,
      errors: 'What a concept',
    },
    'preserves non-array (string) errors as-is'
  )

  t.matchOnly(
    extraFromError(
      Object.assign(new Error(), {
        errors: {
          name: 'PanicError',
          message: 'Oh dear, oh dear.',
        },
      })
    ),
    {
      at: CallSiteLike,
      stack: String,
      errors: {
        name: 'PanicError',
        message: 'Oh dear, oh dear.',
      },
    },
    'preserves non-array (object) errors as-is'
  )

  t.matchOnly(
    extraFromError(new AggregateError(['apple', false])),
    {
      type: 'AggregateError',
      at: CallSiteLike,
      stack: String,
      errors: ['apple', false],
    },
    'preserves non-object errors items as-are'
  )

  t.matchOnly(
    extraFromError(
      new AggregateError([
        'spoooky',
        'skeletons',
        new TypeError('Interrupting Cow'),
        12345,
      ])
    ),
    {
      type: 'AggregateError',
      at: CallSiteLike,
      stack: String,
      errors: [
        'spoooky',
        'skeletons',
        {
          type: 'TypeError',
          at: CallSiteLike,
          stack: String,
        },
        12345,
      ],
    },
    'recurses object errors item alongside non-objects'
  )

  t.end()
})
