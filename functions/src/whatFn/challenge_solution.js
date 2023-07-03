/**
 * #1 :: Write JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * @param {number} value
 * @param {number} threshold
 * @returns number
 */
const getDistanceFromThreshold = (value, threshold) => {
  const distance = value - threshold;
  return distance;
};

const distance = getDistanceFromThreshold(49, 50);
console.log("#1 :: getDistanceFromThreshold => ", distance);

/**
 * #2 :: Write JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * @param {string} sentence
 * @returns number
 */
const getTotalWordsFromString = (sentence) => {
  const splitSentenceAsWords = sentence.split(" ");
  const totalWords = splitSentenceAsWords.length;

  return totalWords;
};

const totalWords = getTotalWordsFromString("Hello world");
console.log("#2 :: getTotalWordsFromString => ", totalWords);

/**
 * #3 :: Write JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * @param {number} limit
 * @returns number
 */
const generateRandomNumberInRange = (limit) => {
  const randomNumber = Math.random() * limit;
  const roundedRandomNumber = Math.floor(randomNumber);

  return roundedRandomNumber;
};

const randomNumber = generateRandomNumberInRange(10);
console.log("#3 :: generateRandomNumberInRange => ", randomNumber);

/**
 * #4 :: Write JS function "isGreaterThan" to check whether one number is greater than a given number
 * @param {number} value
 * @param {number} threshold
 * @returns boolean
 */
const isGreaterThan = (value, threshold) => {
  const isGreater = value > threshold;
  return isGreater;
};

const isGreater = isGreaterThan(10, 10);
console.log("#4 :: isGreaterThan => ", isGreater);

/**
 * #5 :: Write JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * @param {number} summand1
 * @param {number} summand2
 * @returns boolean
 */
const isAdditionGreaterThanFifty = (summand1, summand2) => {
  const sum = summand1 + summand2;
  return sum >= 50;
};

const isGreaterThanFifty = isAdditionGreaterThanFifty(200, 3);
console.log("#5 :: isAdditionGreaterThanFifty => ", isGreaterThanFifty);

/**
 * #6 :: Write JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * @param {Array} collection
 * @returns boolean
 */
const checkCollectionHasElements = (collection) => {
  const collectionLength = collection.length;
  return !!collectionLength;
};

const hasElements = checkCollectionHasElements([1]);
console.log("#6 :: checkCollectionHasElements => ", hasElements);

/**
 * #7 :: Write JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * @param {'string' | 'number' | 'boolean' | 'array'} value
 * @param {boolean} type
 * @returns
 */
const isTypeOf = (value, type) => {
  let typeOfValue;

  if (Array.isArray(value)) {
    typeOfValue = "array";
  } else {
    typeOfValue = typeof value;
  }

  return typeOfValue === type;
};

const isType = isTypeOf([1], "array");
console.log("#7 :: isTypeOf => ", isType);
