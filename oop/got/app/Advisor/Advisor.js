import Character from "../Character/Character.js";

class Advisor extends Character {
  advisedCharacter;

  constructor(name, family, age, advisedCharacter) {
    super(name, family, age);

    if (!(advisedCharacter instanceof Character)) {
      throw new Error("El personaje asesorado debe ser un personaje de GoT");
    }

    this.advisedCharacter = advisedCharacter;
  }

  communicate() {
    super.communicate();

    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

export default Advisor;
