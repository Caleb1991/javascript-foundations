var Part = require('../src/part');

class Shop {
  constructor(params) {
    this.name = params.name;
    this.inventory = {}
  }

  addInventory(item) {
    if (item instanceof Part)
    this.inventory[item.type] = item;
  }

  outfitShip(ship, partType) {
    var shipCaptain = ship.captain;
    var part = this.inventory[partType];
    if (!shipCaptain) {
      return 'cannot outfit a ship without a captain';
    } else if (shipCaptain.credits < part.value) {
      var creditDifference = part.value - shipCaptain.credits;
      return `you require ${creditDifference} more credits to make this purchase`;
    } else {
      shipCaptain.credits -= part.value;
      ship.updatePart(part);
      delete this.inventory[partType];
      return `${partType} added to ship`;
    }
  }
}

module.exports = Shop;