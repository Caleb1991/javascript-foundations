var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = []

    this.gazeAtVictim = function(victim) {
      if (this.statues.length == 3) {
        this.statues.push(new Statue(victim.name));
        return new Person(this.statues.shift().name, 'relieved');
      }
      this.statues.push(new Statue(victim.name));
    }
  }
}

module.exports = Medusa