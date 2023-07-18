const numbersList = [1, 2, 3, 4, 5];
const stringsList = ["java", "C++", "JavaScript", "C#", "TypeScript"];

/**
 * Given a list of numbers, return an array with numbers multiplied per two
 */
const multiplyNumbersPerTwo = () => {
  const multipliedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const multipliedNumber = numbers[i] * 2;
    multipliedNumbers.push(multipliedNumber);
  }

  return multipliedNumbers;
};

console.log(
  "🚀 ~ file: intro-demo.js:14 ~ sumNumbers ~ sumNumbers:",
  multiplyNumbersPerTwo()
);

/**
 * Given a list of strings, return an array only with strings with length equal or greater then 5
 */
const getLongStrings = () => {
  const longStrings = [];

  for (let i = 0; i < stringsList.length; i++) {
    if (stringsList[i].length >= 5) {
      longStrings.push(stringsList[i]);
    }
  }

  return longStrings;
};

console.log(
  "🚀 ~ file: intro-demo.js:14 ~ sumNumbers ~ sumNumbers:",
  getLongStrings()
);

/**
 * Given a list of numbers, return its sum value
 */
const sumNumbers = () => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
};

console.log(
  "🚀 ~ file: intro-demo.js:14 ~ sumNumbers ~ sumNumbers:",
  sumNumbers()
);
