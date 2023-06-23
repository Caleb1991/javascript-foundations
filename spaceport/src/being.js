class Being {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.isAlive = true;
    this.credits = 0;
  }

  updateCredits(amount) {
    this.credits += amount;
  }
}

module.exports = Being;
