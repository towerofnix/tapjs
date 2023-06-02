/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "true is ok",
              "id": 1,
              "name": "true is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "doag is also okay",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 11.345,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first",
          "id": 1,
          "name": "first",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 11.345,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "but that is ok",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "this passes",
              "id": 2,
              "name": "this passes",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "nested ok",
              "id": 3,
              "name": "nested ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 3.613,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second",
          "id": 2,
          "name": "second",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 3.613,
          "todo": false,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 36.045,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 36.045,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > bail > stringified 1`] = `
TAP version 13
# Subtest
    1..2
    # Subtest
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first # time=11.345ms
    # Subtest
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second # time=3.613ms
ok 1 - nesting # time=36.045ms
ok 2 - this passes
1..2

`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest
ok 1 - true is ok
ok 2 - doag is also okay
ok 3 - first # time=11.345ms
# Subtest
ok 4 - but that is ok
ok 5 - this passes
ok 6 - nested ok
ok 7 - second # time=3.613ms
ok 8 - nesting # time=36.045ms
ok 9 - this passes
1..9

`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "true is ok",
              "id": 1,
              "name": "true is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "doag is also okay",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 11.345,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first",
          "id": 1,
          "name": "first",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 11.345,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "but that is ok",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "this passes",
              "id": 2,
              "name": "this passes",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "nested ok",
              "id": 3,
              "name": "nested ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 3.613,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second",
          "id": 2,
          "name": "second",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 3.613,
          "todo": false,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 36.045,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 36.045,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "true is ok",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "doag is also okay",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "first",
      "id": 3,
      "name": "first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 11.345,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "but that is ok",
      "id": 4,
      "name": "but that is ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "this passes",
      "id": 5,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "nested ok",
      "id": 6,
      "name": "nested ok",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "second",
      "id": 7,
      "name": "second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 3.613,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "nesting",
      "id": 8,
      "name": "nesting",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 36.045,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "this passes",
      "id": 9,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest
    1..2
    # Subtest
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first # time=11.345ms
    # Subtest
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second # time=3.613ms
ok 1 - nesting # time=36.045ms
ok 2 - this passes
1..2

`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest
ok 1 - true is ok
ok 2 - doag is also okay
ok 3 - first # time=11.345ms
# Subtest
ok 4 - but that is ok
ok 5 - this passes
ok 6 - nested ok
ok 7 - second # time=3.613ms
ok 8 - nesting # time=36.045ms
ok 9 - this passes
1..9

`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "true is ok",
              "id": 1,
              "name": "true is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "doag is also okay",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 11.345,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first",
          "id": 1,
          "name": "first",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 11.345,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "but that is ok",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "this passes",
              "id": 2,
              "name": "this passes",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "nested ok",
              "id": 3,
              "name": "nested ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 3.613,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second",
          "id": 2,
          "name": "second",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 3.613,
          "todo": false,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 36.045,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 36.045,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > strict > stringified 1`] = `
TAP version 13
# Subtest
    1..2
    # Subtest
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first # time=11.345ms
    # Subtest
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second # time=3.613ms
ok 1 - nesting # time=36.045ms
ok 2 - this passes
1..2

`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest
ok 1 - true is ok
ok 2 - doag is also okay
ok 3 - first # time=11.345ms
# Subtest
ok 4 - but that is ok
ok 5 - this passes
ok 6 - nested ok
ok 7 - second # time=3.613ms
ok 8 - nesting # time=36.045ms
ok 9 - this passes
1..9

`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "true is ok",
              "id": 1,
              "name": "true is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "doag is also okay",
              "id": 2,
              "name": "doag is also okay",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 11.345,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "first",
          "id": 1,
          "name": "first",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 11.345,
          "todo": false,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "but that is ok",
              "id": 1,
              "name": "but that is ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "this passes",
              "id": 2,
              "name": "this passes",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "nested ok",
              "id": 3,
              "name": "nested ok",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 3,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 3.613,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "second",
          "id": 2,
          "name": "second",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 3.613,
          "todo": false,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 36.045,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "nesting",
      "id": 1,
      "name": "nesting",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 36.045,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "this passes",
      "id": 2,
      "name": "this passes",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest
    1..2
    # Subtest
        1..2
        ok 1 - true is ok
        ok 2 - doag is also okay
    ok 1 - first # time=11.345ms
    # Subtest
        ok 1 - but that is ok
        ok 2 - this passes
        ok 3 - nested ok
        1..3
    ok 2 - second # time=3.613ms
ok 1 - nesting # time=36.045ms
ok 2 - this passes
1..2

`

exports[`test/parse-stringify.ts > TAP > subtest-stream-no-comment.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest
ok 1 - true is ok
ok 2 - doag is also okay
ok 3 - first # time=11.345ms
# Subtest
ok 4 - but that is ok
ok 5 - this passes
ok 6 - nested ok
ok 7 - second # time=3.613ms
ok 8 - nesting # time=36.045ms
ok 9 - this passes
1..9

`
