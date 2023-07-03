/**
 * Write JS function "isRaisedBaseEven" to check whether raised base is even or not
 *   - raise base to 2
 *   - check raised base is even (hint: use module to check it)
 *   - if raised base is even, then log message "Raised base with value N is even"
 *   - otherwise, log message "Raised base with value N is odd"
 *
 * @param {number} base
 * @returns number
 */

const isEven = (base) => {
  const module = base % 2;
  return module;
};

const raiseBaseToTwo = (base) => {
  const raisedBase = Math.pow(base, 2);
  return raisedBase;
};

const isRaisedBaseEven = (base) => {
  const raisedBase = raiseBaseToTwo(base);

  if (isEven(raisedBase)) {
    console.log(`Raised base with value ${raisedBase} is even`);
  } else {
    console.log(`Raised base with value ${raisedBase} is odd`);
  }

  return raisedBase;
};
