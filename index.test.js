const { capitalize } = require("./index.js");

test("Capitalize the first letter", () => {
  expect(capitalize("dona")).toBe("Dona");
});
