import Character from "../Character/Character.js";
import Fighter from "../Fighter/Fighter.js";

class Squire extends Character {
  serves;
  kissAssLevel;

  constructor(initialValues) {
    super(initialValues.name, initialValues.family, initialValues.age);

    if (!(initialValues.serves instanceof Fighter)) {
      throw new Error("El personaje asesorado debe ser luchador");
    }

    this.serves = initialValues.serves;
    this.kissAssLevel = initialValues.kissAssLevel;
  }

  communicate() {
    super.communicate();
    return "Soy un loser";
  }
}

export default Squire;
