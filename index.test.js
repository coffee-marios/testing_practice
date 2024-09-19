const { capitalize, reverseString } = require("./index.js");

test("Capitalize the first letter", () => {
  expect(capitalize("dona")).toBe("Dona");
});

test("Reverse string", () => {
  expect(reverseString("dona")).toBe("anod");
  expect(reverseString("marios")).toBe("soiram");
});
