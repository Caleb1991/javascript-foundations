class Robe {
  constructor() {
    this.pockets = [];
    this.createPockets(this.pockets);
  }

  createPockets(emptyArray) {
    for (var i = 0; i < 10; i++) {
      emptyArray.push([]);
    }
  }

  addToPocket(itemName) {
    for (var i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i].length == 0) {
        this.pockets[i].push(itemName);
        return;
      }
    } 
  }

  retrieve(itemName) {
    for (var i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i].includes(itemName)) {
        this.pockets[i] = [];
        return itemName;
      }
    }
  }

  emptyAllPockets() {
    this.pockets = [];
    this.createPockets(this.pockets);
  }
}

module.exports = Robe;