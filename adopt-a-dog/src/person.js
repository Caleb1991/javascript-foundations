var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;

    this.fillFoodBowl = function() {
      this.dog.eat();
    }

    this.throwBall = function() {
      this.dog.fetchBall();
      return `${this.dog.name} loves playing fetch!`;
    }

    this.introduceNewFriends = function(fren) {
      this.dog.makeNewFriend(fren);
    }

    this.adoptAPup = function(name, age) {
      if (this.dog) {
        return `You can't adopt ${name}. You already have ${this.dog.name}!`;
      } else {
        this.dog = new Dog({ name: name, age: age });
      }
    }
  }
}

module.exports = Person;
