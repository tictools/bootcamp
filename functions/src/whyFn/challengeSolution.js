//ABSTRACTION | ENCAPSULATION

//place here auxiliar functions which encapsulate logid required by main functions
const getTotalWordsFromString = (sentence) => {
  const splitSentenceAsWords = sentence.split(" ");
  const totalWords = splitSentenceAsWords.length;

  return totalWords;
};

const isGreaterThan = (value, threshold) => {
  const isGreater = value > threshold;
  return isGreater;
};

const generateRandomNumberInRange = (limit) => {
  const randomNumber = Math.random() * limit;
  const roundedRandomNumber = Math.floor(randomNumber);

  return roundedRandomNumber;
};

const getDistanceFromThreshold = (value, threshold) => {
  const distance = value - threshold;
  return distance;
};

const checkCollectionHasElements = (collection) => {
  const collectionLength = collection.length;
  return !!collectionLength;
};

/**
 * Wheck number of words contained in given string
    - if total number of words is graeter then 5, then return uppercased string
    - otherwise, return lowercased string
 * @param {*} sentence 
 * @returns string
 */
const formatStringByWordsLength = (sentence) => {
  let formattedSentence = "";

  const totalWords = getTotalWordsFromString(sentence);
  const hasMoreThenFiveWords = isGreaterThan(totalWords, 5);

  if (hasMoreThenFiveWords) {
    formattedSentence = sentence.toUpperCase();
  } else {
    formattedSentence = sentence.toLowerCase();
  }
  return formattedSentence;
};

const formattedString1 = formatStringByWordsLength("HELLO world");
const formattedString2 = formatStringByWordsLength(
  "Welcome to the ISDI coders CHALLENGE"
);

console.log("formatStringByWordsLength => ", formattedString1);
console.log("formatStringByWordsLength => ", formattedString2);

/** 
 * Wenerate a random number (in between 0-100) and sum it to given number
    - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
    - otherwise, return message "Sum with value N is left in N points from number 100"
 * @param {number} value 
 * @returns string
 */
const getDistanceMessageFromSumTo100 = (value) => {
  let message = "";
  const randomNumber = generateRandomNumberInRange(100);
  const sum = value + randomNumber;
  const distance = getDistanceFromThreshold(sum, 100);

  if (isGreaterThan(sum, 100)) {
    message = `Sum with value ${sum} exceeds in ${distance} points from number 100`;
  } else {
    message = `Sum with value ${sum} is left in ${distance} points from number 100`;
  }
  return message;
};

const sum1 = getDistanceMessageFromSumTo100(20);
const sum2 = getDistanceMessageFromSumTo100(75);

console.log("getDistanceMessageFromSumTo100 => ", sum1);
console.log("getDistanceMessageFromSumTo100 => ", sum2);

/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * @param {Array} collection 
 * @returns string
 */
const transformCollectionToString = (collection) => {
  let arrayAsString = "";
  const hasElements = checkCollectionHasElements(collection);
  if (hasElements) {
    arrayAsString = collection.join(" | ");
  }
  return arrayAsString;
};

const collection1 = transformCollectionToString([1, 2, 3]);
const collection2 = transformCollectionToString([]);

console.log("transformCollectionToString => ", collection1);
console.log("transformCollectionToString => ", collection2);
