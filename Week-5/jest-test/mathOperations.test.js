const { sum, diff, product } = require("./mathOperations");

test("test for addition 1", () => {
  expect(sum(100, 50)).toBe(150);
});

test("test for addition 2", () => {
  expect(sum(2, 2)).toBe(5);
});

test("test for difference 1", () => {
  expect(diff(2, 2)).toBe(1);
});

test("test for difference 2", () => {
  expect(diff(100, 75)).toBe(25);
});

test("test for multiplication 1", () => {
  expect(product(50, 2)).toBe(100);
});

test("test for multiplication 2", () => {
  expect(product(-1, 2)).toBe(2);
});
