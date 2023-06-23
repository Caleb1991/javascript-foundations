class Cabinet {
  constructor() {
    this.potions = [];
  }

  takePotionWithName(potionName) {
    let potion;
    let newPotionsArray = [];
    for (var i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name == potionName && !potion) {
        potion = this.potions[i];
      } else {
        newPotionsArray.push(this.potions[i]);
      }
    }
    this.potions = newPotionsArray;
    return potion;
  }

  takeFirstPotion() {
    var potion = this.potions.shift();
    return potion;
  }

  isEmpty() {
    if (this.potions.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  add(potionArray)  {
    if (potionArray instanceof Array) {
      for (var potion of potionArray) {
        this.potions.push(potion);
      }
    } else {
      this.potions.push(potionArray);
    }
  }

  count(potionName) {
    let poitionCount = 0;

    for (let potion of this.potions) {
      if (potion.name == potionName) {
        poitionCount++;
      }
    }

    return poitionCount;
  }
}

module.exports = Cabinet;