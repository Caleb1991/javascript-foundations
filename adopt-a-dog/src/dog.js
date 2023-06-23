class Dog {
  constructor(params) {
    this.name = params['name'];
    this.age = params['age'];
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }
  
  eat() {
    if (this.hungry) {
      this.hungry = false;
      return 'Yum!';
    } else {
      return 'I refuse to eat.';
    }
  }
  
  fetchBall() {
    if (this.energyLevel > 3) {
      this.energyLevel--;
      return 'This is fun!';
    } else {
      return "Nah, I'm going to sleep instead.";
    }
  }

  sleep() {
    if (this.energyLevel == 10) {
      return "I have too much energy to rest. I'm going to chew something instead."
    } else {
      this.energyLevel++;
    }
  }
  makeNewFriend(fren) {
    this.friends.push(fren.name);
  }

}

module.exports = Dog;
