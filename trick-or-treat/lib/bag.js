class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.empty = false;
    this.count++;
    this.candies.push(candy);
  }

  contains(candyType) {
    for (var candy of this.candies) {
      if (candy.type == candyType) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Bag;