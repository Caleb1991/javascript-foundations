class Dragon {
  constructor(name, rider) {
    this.name = name
    this.rider = rider
    var meals = 0
    this.hungry = true

    this.greet = function() {
      return `Hi, ${this.rider}!`
    }

    this.eat = function() {
      meals++

      if (meals >= 3) {
        this.hungry = false
      };
    }
  }

}

module.exports = Dragon;