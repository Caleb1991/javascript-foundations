class SkatePark {
  constructor(params) {
    this.name = params.name;
    this.yearFounded = params.year;
    this.style = params.type;
    this.features = params.features;
    this.isPrivate = params.isPrivate ? params.isPrivate : false;
    this.cost = params.price ? params.price : 0;
    this.occupants = [];
  }

  admit(skater) {
    if (!this.isPrivate && this.occupants.length < 3) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    } else {
      if (skater.money >= this.cost && this.occupants.length < 3) {
        this.occupants.push(skater);
        skater.money -= this.cost;
        return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
      } else if (skater.money < this.cost) {
        return "Sorry, you don't have enough money.";
      } else {
        return 'Sorry, we are at max capacity. Thank you for understanding.';
      }
    }
  }
}

module.exports = SkatePark;