import { expect, test } from "vitest";
import { getName } from ".";

test("retrieves a name", () => {
  expect(getName()).toBe("John Doe");
});
