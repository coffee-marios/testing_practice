const { capitalize, reverseString, calculator } = require("./index.js");

test("Capitalize the first letter", () => {
  expect(capitalize("dona")).toBe("Dona");
});

test("Reverse string", () => {
  expect(reverseString("dona")).toBe("anod");
  expect(reverseString("marios")).toBe("soiram");
});

describe("Calulator's basic operations", () => {
  test("Add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(7, 9)).toBe(16);
  });

  test("Subtract two numbers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(7, 9)).toBe(-2);
    expect(calculator.subtract(7, 0)).toBe(7);
  });

  test("Divide two numbers", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
    expect(calculator.divide(7, 9)).toBeCloseTo(0.77, 1);

    expect(calculator.divide(7, 0)).toBe(Infinity);
  });

  test("Multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(7, 9)).toBe(63);
    expect(calculator.multiply(7, 0)).toBe(0);
  });
});
