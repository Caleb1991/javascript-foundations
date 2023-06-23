class Ingredient {
  constructor(params) {
    this.name = params['name'];
    this.amount = params['amount'];
  }

  changeAmount(amount) {
    this.amount = amount;
  }
}

module.exports = Ingredient;
