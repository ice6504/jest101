import { sum } from "../src/example";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

import { countA } from "../src/example";

test("count A in words", () => {
  expect(countA("AaA")).toBe(3);
});
