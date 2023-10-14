import Character from "../Character/Character.js";

class Fighter extends Character {
  weapon;
  skills;

  constructor(initialValues) {
    super(initialValues.name, initialValues.family, initialValues.age);
    this.weapon = initialValues.weapon;
    this.skills = initialValues.skills;
  }

  communicate() {
    super.communicate();
    return "Primero pego y luego pregunto";
  }
}

export default Fighter;
