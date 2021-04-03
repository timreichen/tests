import { tests } from "./mod.ts";

import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

tests({
  name: "nesting",
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

async function get() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("foo"), 100);
  });
}

tests({
  name: "async",
  tests: () => {
    return [
      {
        name: "fn",
        fn: async () => {
          const data = await get();
          assertEquals(data, "foo");
        },
      },
    ];
  },
});
