class Ingredient {
  constructor(params) {
    this.name = params['name'];
    this.amount = params['amount'];

    this.changeAmount = function(amount) {
      this.amount = amount;
    }
  }
}

module.exports = Ingredient;
