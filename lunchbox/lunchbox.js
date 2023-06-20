class LunchBox {
  constructor(params) {
    this.owner = params['owner'];
    this.material = params['madeOf'];
    this.shape = params['shape'];
    this.color = params['color'];
    this.snacks = [];

    this.acquireSnack = function(snack) {
      this.snacks.push(snack);
      snack.isInLunchBox = true;
    }

    this.findHealthySnacks = function() {
      let tempArray = [];
      for (const snack of this.snacks) {
        if (snack.checkForHealthy()) {
          tempArray.push(snack.type);
        }
      }

      return tempArray;
    }
  }
}

module.exports = LunchBox;
