/**
 * Define function 'feedMonkeys' to map 'hungryMonkeys' collection so you will ensure each monkey has one bannana
 */

const hungryMonkeysList = ["🐒", "🦍", "🦧"];

const feedMonkeys = (monkeys) => {
  const feededMonkeys = monkeys.map((monkey) => {
    const feededMonkey = `${monkey} 🍌`;
    return feededMonkey;
  });
  return feededMonkeys;
};

console.log(
  "🚀 ~ file: hungry-monkeys-solution.js:8 ~ feedMonkeys ~ feedMonkeys:",
  feedMonkeys(hungryMonkeysList)
);
