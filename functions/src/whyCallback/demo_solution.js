/**
 * perform an addition of two numbers. It logs a message to show type of operation, received values and additon result
 * @param {number} value
 * @param {number} randomValue
 * @returns void
 */
const add = (value, randomValue) => {
  const result = value + randomValue;
  console.log(
    `Addition with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );
};

/**
 * perform a substraction of two numbers. It logs a message to show type of operation, received values and additon result
 * @param {number} value
 * @param {number} randomValue
 * @returns void
 */
const substract = (value, randomValue) => {
  const result = value - randomValue;
  console.log(
    `Substraction with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );
};

/**
 * perform a multiplication of two numbers. It logs a message to show type of operation, received values and additon result
 * @param {number} value
 * @param {number} randomValue
 * @returns void
 */
const multiply = (value, randomValue) => {
  const result = value * randomValue;
  console.log(
    `Multiplication with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );
};

/**
 * perform a division of two numbers. It logs a message to show type of operation, received values and additon result
 * @param {number} value
 * @param {number} randomValue
 * @returns void
 */
const divide = (value, randomValue) => {
  const result = value / randomValue;
  console.log(
    `Division with values ${value} and ${randomValue} has been succesfully executed with result ${result}`
  );
};

/**
 * operateWithRandomNumber
 * Write a JS function to perfom different algorithmic operations with two numbers, one received as argument and another one internally generated (random)
 * steps:
 *  - generate random rounded number
 *  - invoke callback function with argument value and random number
 *  - return random number
 * @param {number} value
 * @param {Function} callback
 * @returns number
 */

const operateWithRandomNumber = (value, callback) => {
  const randomNumber = Math.random() * 10;
  const roundedNumber = Math.floor(randomNumber);

  callback(value, roundedNumber);

  return roundedNumber;
};

const randomNumberForAdd = operateWithRandomNumber(2, add);
console.log("randomNumberForAdd => ", randomNumberForAdd);

const randomNumberForSubstraction = operateWithRandomNumber(2, substract);
console.log("randomNumberForSubstraction => ", randomNumberForSubstraction);

const randomNumberForMultiplication = operateWithRandomNumber(2, multiply);
console.log("randomNumberForMultiplication => ", randomNumberForMultiplication);

const randomNumberForDivision = operateWithRandomNumber(2, divide);
console.log("randomNumberForDivision => ", randomNumberForDivision);
