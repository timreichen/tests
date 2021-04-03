# tests

_Nest deno tests with ease._

## What is tests?

Tests lets you nest `Deno.test` tests. You can nest as deep as you want while
_tests_ creates the test names for you.

## How does tests work?

_tests_ simply combines joins test names with an `→` and then runs `Deno.test`
on every leaf test. So you can use `deno test` on the CLI as you are used to.

## How to use

```ts
// example_test.ts

import { tests } from "https://deno.land/x/tests/mod.ts";
import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

tests({
  name: "suite",
  tests: () => [
    {
      name: "group 1",
      tests: () => [
        {
          name: "test 1",
          fn: () => {
            assertEquals("a", "a");
          },
        },
        {
          name: "test 2",
          fn: () => {
            assertEquals("b", "b");
          },
        },
      ],
    },
    {
      name: "group 2",
      tests: () => [
        {
          name: "test 1",
          fn: () => {
            assertEquals("a", "a");
          },
        },
        {
          name: "test 2",
          fn: () => {
            assertEquals("b", "b");
          },
        },
      ],
    },
  ],
});
```

_run_

```sh
deno test example_test.ts
```

_output_

```sh
running 4 tests
test suite → group 1 → test 1 ... ok (1ms)
test suite → group 1 → test 2 ... ok (1ms)
test suite → group 2 → test 1 ... ok (2ms)
test suite → group 2 → test 2 ... ok (2ms)

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (7ms)
```

## No hooks?

`tests` doesn't provide hooks, though each `tests` property takes a function where you can setup your context wherever you need it. Since `Deno.test` is used under the hood which does not provide a way to detect when the test has finished, there is currently no way to detect the end of a test or all tests for that matter.