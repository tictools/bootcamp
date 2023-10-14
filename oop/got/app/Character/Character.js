class Character {
  name;
  family;
  age;
  isAlive = true;
  series = "GoT";

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  die() {
    this.isAlive = false;
  }

  communicate() {}
}

export default Character;
