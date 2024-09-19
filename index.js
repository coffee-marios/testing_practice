let capitalize = function (str) {
  let firstLetter = str.charAt(0).toUpperCase();
  let word = firstLetter + str.slice(1);

  return word;
};

let reverseString = (str) => {
  let word = "";
  let index = str.length - 1;
  while (index >= 0) {
    let newLetter = str.charAt(index);
    word += newLetter;
    index -= 1;
  }
  return word;
};

let calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
};

module.exports = { capitalize, reverseString, calculator };
