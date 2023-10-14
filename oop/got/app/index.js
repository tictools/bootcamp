import Advisor from "./Advisor/Advisor.js";
import Fighter from "./Fighter/Fighter.js";
import King from "./King/King.js";
import Squire from "./Squire/Squire.js";

const characters = [];

// Joffrey Baratheon
const joffreyBaratheon = new King("Joffrey Baratheon", "Baratheon", 18, 5);
characters.push(joffreyBaratheon);

// Jaime Lannister
const jaimeLannisterInitialValues = {
  name: "Jaime Lannister",
  family: "Lannister",
  age: 40,
  weapon: "sword",
  skills: 8,
};

const jaimeLannister = new Fighter(jaimeLannisterInitialValues);
characters.push(jaimeLannister);

// Daenerys Targaryen
const daenerysTargaryenInitialValues = {
  name: "Daenerys Targaryen",
  family: "Targaryen",
  age: 20,
  weapon: "fire",
  skills: 10,
};
const daenerysTargaryen = new Fighter(daenerysTargaryenInitialValues);
characters.push(daenerysTargaryen);

// Tyrion Lannister
const tyrionLannister = new Advisor(
  "Tyrion Lannister",
  "Lannister",
  40,
  daenerysTargaryen
);
characters.push(tyrionLannister);

// Bronn
const bronnInitialValues = {
  name: "Bronn",
  family: "Stokeworth",
  age: 30,
  weapon: "sword",
  serves: jaimeLannister,
  kissAssLevel: 8,
};
const bronn = new Squire(bronnInitialValues);
characters.push(bronn);

// Communicate
console.log(joffreyBaratheon.communicate());
console.log(jaimeLannister.communicate());
console.log(daenerysTargaryen.communicate());
console.log(tyrionLannister.communicate());
console.log(bronn.communicate());

// Communicate
const mappedCharacters = characters.map((character) => ({
  type: character.constructor.name,
  name: character.name,
  isAlive: character.isAlive,
  age: character.age,
}));

console.log(mappedCharacters);
