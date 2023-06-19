class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];

    this.runSomeMiles = function(milesRan) {
      this.milesRun += milesRan;
      this.fitness += milesRan;
    }

    this.stretch = function() {
      this.fitness += .5;
    }

    this.runRace = function(name, miles) {
      this.completedRaces.push(name);
      this.runSomeMiles(miles);
    }
  }
}

module.exports = Runner;
