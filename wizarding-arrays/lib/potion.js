class Potion {
  constructor(name, rarenessValue) {
    this.name = name;
    this.rareness = rarenessValue ? rarenessValue : 0;
  }

  isRare() {
    if (this.rareness > 7) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Potion;