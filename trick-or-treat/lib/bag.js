class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];

    this.fill = function(candy) {
      this.empty = false;
      this.count++;
      this.candies.push(candy);
    }

    this.contains = function(candyType) {
      for (var candy of this.candies) {
        if (candy.type == candyType) {
          return true;
        }
      }
      return false;
    }
  }
}

module.exports = Bag;