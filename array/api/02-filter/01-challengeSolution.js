/**
 * CONSTANTS
 */
const partialsList = [2, 25, 43, 12, 67, 42, 28];

const countriesList = [
  "United Kingdom",
  "Italy",
  "France",
  "Portugal",
  "Greece",
];

const customersList = [
  {
    name: "Foo",
    member: true,
  },
  {
    name: "Bar",
    member: false,
  },
  {
    name: "Fizz",
    member: true,
  },
  {
    name: "Buzz",
    member: false,
  },
  {
    name: "FizzBuzz",
    member: true,
  },
];

/**
 * Given 'partialsList' array, define function 'getEvensOnly' to return a new array that only includes the even numbers.
 *
 * expected: [ 2, 12, 42, 28 ]
 */
const getEvensOnly = (counters) => {
  const evenCounters = counters.filter((counter) => {
    const isEvenCounter = counter % 2 === 0;
    return isEvenCounter;
  });

  return evenCounters;
};

console.log(
  "🚀 ~ file: 01-challengeSolution.js:12 ~ getEvensOnly ~ getEvensOnly:",
  getEvensOnly(partialsList)
);

/**
 * Given 'countriesList' array, define function 'extractCountriesWithFiveCharactersOrFewer' to return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */
const extractCountriesWithFiveCharactersOrFewer = (countries) => {
  const fiveCharactersOrFewerCountries = countries.filter((country) => {
    const hasFiveCharsOrFewer = country.length <= 5;
    return hasFiveCharsOrFewer;
  });

  return fiveCharactersOrFewerCountries;
};

console.log(
  "🚀 ~ file: 01-challengeSolution.js:31 ~ extractCountriesWithFiveCharactersOrFewer ~ extractCountriesWithFiveCharactersOrFewer:",
  extractCountriesWithFiveCharactersOrFewer(countriesList)
);

/**
 * Given 'customersList' array, define function 'customersWhoBelongToMembership' to  return a new array that has filtered out all those who belong to the club.
 *
 * expected: [{ name: 'Foo', member: true },  { name: 'Fizz', member: true },  { name: 'FizzBuzz', member: true }]
 */
const customersWhoBelongToMembership = (customers) => {
  const members = customers.filter((customer) => {
    const isMember = customer.member;
    return isMember;
  });

  return members;
};

console.log(
  "🚀 ~ file: 01-challengeSolution.js:81 ~ customersWhoBelongToMembership ~ customersWhoBelongToMembership:",
  customersWhoBelongToMembership(customersList)
);
