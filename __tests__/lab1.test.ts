import { sCheck } from "../src/lab1";

test("StatusTest", () => {
  expect(sCheck(100, 50)).toBe("General");
  expect(sCheck(125, 100)).toBe("Risk");
  expect(sCheck(139, 120)).toBe("Not found");
  expect(sCheck(140, 130)).toBe("High Risk level 1");
  expect(sCheck(179, 182)).toBe("High Risk level 2");
  expect(sCheck(184, 190)).toBe("High Risk level 3");
});
