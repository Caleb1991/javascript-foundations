var Skier = require('./Skier');

class Lift {
  constructor(maxSkiers) {
    this.inService = true;
    this.limit = maxSkiers;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(skierName, liftTicket) {
    const skier = new Skier(skierName, liftTicket)
    if (liftTicket && this.limit > this.skiers.length) {
      this.skiers.push(skier);
      if (this.limit == this.skiers.length) {
        this.safetyBar = 'down';
      }
    } else if (!liftTicket) {
      return `Sorry, ${skierName}. You need a lift ticket!`;
    } else {
      return `Sorry, ${skierName}. Please wait for the next lift!`;
    }
  }

  startLift() {
    if (this.safetyBar == 'up') {
      var remainingSpots = this.limit - this.skiers.length;
      var string = `We still need ${remainingSpots} more `;
      string += remainingSpots == 1 ? 'skier!' : 'skiers!';
      return string;
    }
  }
}

module.exports = Lift;