class Snack {
  constructor(type) {
    this.deliciousLevel = 'extra';
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;

    this.getEaten = function(qty=10) {
      this.amount -= qty;
      if (this.amount == 20) {
        this.cuttingItClose = true;
      }
    }

    this.checkForHealthy = function() {
      return this.type.toLowerCase().includes('fruit');
    }
  }
}

module.exports = Snack;
