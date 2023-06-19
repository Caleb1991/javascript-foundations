class Dog {
  constructor(params) {
    this.name = params['name'];
    this.age = params['age'];
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];

    this.eat = function() {
      if (this.hungry) {
        this.hungry = false;
        return 'Yum!';
      } else {
        return 'I refuse to eat.';
      }
    }
    
    this.fetchBall = function() {
      if (this.energyLevel > 3) {
        this.energyLevel--;
        return 'This is fun!';
      } else {
        return "Nah, I'm going to sleep instead.";
      }
    }

    this.sleep = function() {
      if (this.energyLevel == 10) {
        return "I have too much energy to rest. I'm going to chew something instead."
      } else {
        this.energyLevel++;
      }
    }

    this.makeNewFriend = function(fren) {
      this.friends.push(fren.name);
    }
  }

}

module.exports = Dog;
