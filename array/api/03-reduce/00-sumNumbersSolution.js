/**
 * CONSTANTS
 */
const partialValues = [1, 2, 3, 4, 5];

/**
 * Given 'partialValues' array, define function 'sumPartialValues' to return its sum value
 * By default add 10 to the total
 *
 * expected: 25
 */

const sumPartialValues = (values) => {
  const totalValues = values.reduce((acc, value) => {
    const currentTotal = acc + value;
    return currentTotal;
  }, 10);

  return totalValues;
};

console.log(
  "🚀 ~ file: 00-sumNumbersSolution.js:14 ~ sumPartialValues ~ sumPartialValues:",
  sumPartialValues(partialValues)
);
