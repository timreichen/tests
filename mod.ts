interface TestGroupDefinition {
  name: string;
  tests: () => TestDefinition[];
}

export type TestDefinition = TestGroupDefinition | Deno.TestDefinition;

function isTestGroupDefinition(t: any): t is TestGroupDefinition {
  return t.tests !== undefined;
}

export function test(t: TestDefinition) {
  function create(t: TestDefinition, names: string[]) {
    if (isTestGroupDefinition(t)) {
      names.push(t.name);
      t.tests().forEach((t) => create(t, [...names]));
    } else {
      Deno.test({
        ...t,
        name: [...names, t.name].join(" → "),
      });
    }
  }
  return create(t, []);
}
