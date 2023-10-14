import Character from "../Character/Character.js";

class King extends Character {
  kingdomYears;

  constructor(name, family, age, kingdomYears) {
    super(name, family, age);

    this.kingdomYears = kingdomYears;
  }

  communicate() {
    super.communicate();

    return "Vais a morir todos";
  }
}

export default King;
