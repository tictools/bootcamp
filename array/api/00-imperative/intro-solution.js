const numbersList = [1, 2, 3, 4, 5];
const wordsList = ["Java", "C++", "JavaScript", "C#", "TypeScript"];

/**
 * Given a list of numbers, define method 'duplicateNumbers' to return an array with numbers multiplied per two
 */
const duplicateNumbers = (numbers) => {
  const multipliedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const multipliedNumber = numbers[i] * 2;
    multipliedNumbers.push(multipliedNumber);
  }

  return multipliedNumbers;
};

console.log(
  "🚀 ~ file: intro-solution.js:14 ~ duplicateNumbers ~ duplicateNumbers:",
  duplicateNumbers(numbersList)
);

/**
 * Given a list of strings, define method 'getLongWords' to return an array only with strings with length equal or greater then 5
 */
const getLongWords = (words) => {
  const longStrings = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      longStrings.push(words[i]);
    }
  }

  return longStrings;
};

console.log(
  "🚀 ~ file: intro-solution.js:14 ~ getLongWords ~ getLongWords:",
  getLongWords(wordsList)
);

/**
 * Given a list of numbers, define method 'sumNumbers' to return its sum value
 */
const sumNumbers = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
};

console.log(
  "🚀 ~ file: intro-solution.js:14 ~ sumNumbers ~ sumNumbers:",
  sumNumbers(numbersList)
);
