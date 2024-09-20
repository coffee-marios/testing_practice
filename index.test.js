const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} = require("./index.js");

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

describe("caesarCipher: Encrypt a string with Shift Cipher", () => {
  test("Shift a small letter", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("Wrap from z to a", () => {
    expect(caesarCipher("abcz", 1)).toBe("bcda");
  });
  test("Wrap from Z to A", () => {
    expect(caesarCipher("ABCZ", 1)).toBe("BCDA");
  });
  test("Wrap from Z to A and z to a", () => {
    expect(caesarCipher("abcxyzABCXYZ", 2)).toBe("cdezabCDEZAB");
  });
  test("Return a character outside the alphabet", () => {
    expect(caesarCipher("8 # $ % )( !", 1)).toBe("8 # $ % )( !");
  });
  test("Retain spaces and punctuations", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
