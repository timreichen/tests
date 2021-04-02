# test

Nest deno tests with appropriate names.

## Example

```ts
import { test } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

test({
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

output

```sh
running 4 tests
test suite → group 1 → test 1 ... ok (1ms)
test suite → group 1 → test 2 ... ok (1ms)
test suite → group 2 → test 1 ... ok (2ms)
test suite → group 2 → test 2 ... ok (2ms)

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (7ms)
```
