let capitalize = function (str) {
  let firstLetter = str.charAt(0).toUpperCase();
  let word = firstLetter + str.slice(1);

  return word;
};
module.exports = { capitalize };
