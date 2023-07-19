/**
 * CONSTANTS
 */

const monkeys = ["🐒", "🦍", "🦧"];
const numbers = [1, 2, 3, 4, 5];
const words = ["Java", "C++", "JavaScript", "C#", "TypeScript"];

/**
 * Given 'monkeys' array, define function 'feedMonkeys' to return an array where each monkey has one bannana
 * use for() instruction
 *
 * expected: ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 */
const feedMonkeys = (monkeys) => {
  const feededMonkeys = [];

  for (let i = 0; i < monkeys.length; i++) {
    const feededMonkey = monkeys[i] + "🍌";
    feededMonkeys.push(feededMonkey);
  }

  return feededMonkeys;
};

console.log(
  "🚀 ~ file: intro-solution.js:14 ~ feedMonkeys ~ feedMonkeys:",
  feedMonkeys(monkeys)
);

/**
 * Given 'words' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected: ['JavaScript', 'TypeScript']
 */
const getLongWords = (words) => {
  const longWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      longWords.push(words[i]);
    }
  }

  return longWords;
};

console.log(
  "🚀 ~ file: intro-solution.js:14 ~ getLongWords ~ getLongWords:",
  getLongWords(words)
);

/**
 * Given 'numbers' array, define function 'sumNumbers' to return its sum value
 * use for() instruction
 *
 * expected: 15
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
  sumNumbers(numbers)
);
