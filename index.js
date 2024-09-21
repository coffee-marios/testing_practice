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

let test_letter = (letter) => {
  let letters = /^[a-zA-Z]$/;
  let test_letter = letters.test(letter);
  if (test_letter) {
    return letter.charCodeAt(0);
  }
  return null;
};

let encrypt = (letter_num, shift) => {
  let encr_number;

  // uppercase
  if (letter_num <= 90) {
    encr_number = (letter_num + shift) % 90;
    if (encr_number === 0) encr_number += 90;
    if (encr_number < 65) encr_number += 64;
  } else {
    // lowercase
    encr_number = (letter_num + shift) % 122;
    if (encr_number === 0) encr_number += 122;
    if (encr_number < 97) encr_number += 96;
  }
  return encr_number;
};

let caesarCipher = (str, shift) => {
  let cipher = "";

  for (let i = 0; i < str.length; i++) {
    let original_letter = str.charAt(i);
    let char_number = test_letter(original_letter);
    if (char_number === null) {
      cipher += original_letter;
      continue;
    }
    let letter_num = encrypt(original_letter.charCodeAt(0), shift);
    let letter = String.fromCharCode(letter_num);
    cipher += letter;
  }

  return cipher;
};

let analyzeArray = (arr) => {
  let obj = {};
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  obj.average = sum / arr.length;
  obj.min = min;
  obj.max = max;
  obj.length = arr.length;
  return obj;
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
