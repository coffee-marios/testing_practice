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

module.exports = { capitalize, reverseString };
