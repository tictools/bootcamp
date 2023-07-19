/**
 * CONSTANTS
 */
const secondsList = [2, 5, 100];

const matesList = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const vipsList = [
  {
    name: "Foo",
    age: 80,
  },
  {
    name: "Bar",
    age: 2,
  },
  {
    name: "Fizz",
    age: 5,
  },
  {
    name: "Buzz",
    age: 16,
  },
  {
    name: "FizzBuzz",
    age: 100,
  },
];

/**
 * Given secondsList array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */
const transformSecondsToWords = (numbers) => {
  const transformedNumbers = numbers.map((number) => {
    return number.toString();
  });

  return transformedNumbers;
};

console.log(
  "🚀 ~ file: challenge-solution.js:37 ~ transformSecondsToWords ~ transformSecondsToWords:",
  transformSecondsToWords(secondsList)
);

/**
 * Given matesList array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */
const capitalizeMates = (names) => {
  const capitalizedNames = names.map((name) => {
    const lowerCasedName = name.toLowerCase();
    const capitalizedName = `${lowerCasedName
      .charAt(0)
      .toUpperCase()}${lowerCasedName.slice(1)}`;

    return capitalizedName;
  });

  return capitalizedNames;
};

console.log(
  "🚀 ~ file: challenge-solution.js:55 ~ capitalizeMates ~ capitalizeMates:",
  capitalizeMates(matesList)
);

/**
 * Given vipsList array, define function 'extractVipsNames' to return an array of strings only with vips names
 *
 * expected: [ 'Foo', 'Bar', 'Fizz', 'Buzz', 'FizzBuzz' ]
 */
const extractVipsNames = (vips) => {
  const vipsNames = vips.map((vip) => {
    return vip.name;
  });
  return vipsNames;
};

console.log(
  "🚀 ~ file: challenge-solution.js:49 ~ extractVipsNames ~ extractVipsNames:",
  extractVipsNames(vipsList)
);

/**
 * Given vipsList array, define function 'goToTheMatrix' to return an array of strings with a new message depending on the age
 *
 * if vips are over 18, they can go to the Matrix
 * otherwise, they are under age
 *
 * expected: [ 'Foo can go to The Matrix', 'Bar is under age', 'Fizz is under age', 'Buzz is under age', 'FizzBuzz can go to The Matrix' ]
 */
const goToTheMatrix = (vips) => {
  const messages = vips.map((vip) => {
    if (vip.age >= 18) {
      return `${vip.name} can go to The Matrix`;
    }

    return `${vip.name} is under age`;
  });

  return messages;
};

console.log(
  "🚀 ~ file: challenge-solution.js:58 ~ goToTheMatrix ~ goToTheMatrix:",
  goToTheMatrix(vipsList)
);

/**
 * Given vipsList array, define function 'appendVipsInDOM' to return an array of strings with vip name wrapped in tag <h1> and age wrapped in tag <h2>
 * if vips is over 18, they can go to the Matrix
 * otherwise, they are under age
 *
 * expected: [ '<h1>Foo</h1><h2>80</h2>', '<h1>Bar</h1><h2>2</h2>', '<h1>Fizz</h1><h2>5</h2>', '<h1>Buzz</h1><h2>16</h2>', '<h1>FizzBuzz</h1><h2>100</h2>' ]
 */
const appendVipsInDOM = (vips) => {
  const nodes = vips.map((vip) => {
    return `<h1>${vip.name}</h1><h2>${vip.age}</h2>`;
  });

  return nodes;
};

console.log(
  "🚀 ~ file: challenge-solution.js:66 ~ appendVipsInDOM ~ appendVipsInDOM:",
  appendVipsInDOM(vipsList)
);
