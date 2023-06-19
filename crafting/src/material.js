class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;

    this.useMaterial = function(usedAmount) {
      if (this.amount < usedAmount) {
        return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
      } else {
        this.amount -= usedAmount;
        return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
      }
    }

    this.calculateMaterialCost = function() {
      return this.price * this.amount;
    }
  }
}

module.exports = Material;
