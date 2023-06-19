const Direwolf = require("./direwolf");

class Stark {
  constructor(params) {
    this.name = params['name'];
    this.location = params['area'] ? params['area'] : 'Winterfell';
    this.safe = false;
    this.houseWords = 'Winter is Coming';

    this.sayHouseWords = function() {
      return this.houseWords;
    };

    this.callDirewolf = function(name, area) {
      var direwolf = new Direwolf(name, this.location, area);
      direwolf.protect(this);
      return direwolf;
    }
  }
}

module.exports = Stark;