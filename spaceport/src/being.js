class Being {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.isAlive = true;
    this.credits = 0;

    this.updateCredits = function(amount) {
      this.credits += amount;
    }
  }
}

module.exports = Being;
