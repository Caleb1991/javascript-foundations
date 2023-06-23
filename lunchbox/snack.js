class Snack {
  constructor(type) {
    this.deliciousLevel = 'extra';
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }
  
  getEaten(qty=10) {
    this.amount -= qty;
    if (this.amount == 20) {
      this.cuttingItClose = true;
    }
  }

  checkForHealthy() {
    return this.type.toLowerCase().includes('fruit');
  }
}

module.exports = Snack;
