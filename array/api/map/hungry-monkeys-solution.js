/**
 * Map 'hungryMonkeys' collection to ensure each monkey has one bannana
 */
const hungryMonkeys = ["🐒", "🦍", "🦧"];

const feededMonkeys = hungryMonkeys.map((monkey) => {
  const feededMonkey = `${monkey} 🍌`;
  return feededMonkey;
});

console.log("🚀 ~ feededMonkeys:", feededMonkeys);

// const mapHungryMonkeys = (monkey) => `${monkey} 🍌`;
// const feededMonkeys = hungryMonkeys.map((monkey) => mapHungryMonkeys(monkey));
