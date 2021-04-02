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
