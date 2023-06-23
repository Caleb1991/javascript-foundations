const Direwolf = require("./direwolf");

class Stark {
  constructor(params) {
    this.name = params['name'];
    this.location = params['area'] ? params['area'] : 'Winterfell';
    this.safe = false;
    this.houseWords = 'Winter is Coming';
  }

  sayHouseWords() {
    return this.houseWords;
  };

  callDirewolf(name, area) {
    var direwolf = new Direwolf(name, this.location, area);
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;