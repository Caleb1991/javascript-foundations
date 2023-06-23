class Direwolf {
  constructor(name, home='Beyond the Wall', size='Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home == stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      stark.houseWords = 'The North Remembers';
      this.huntsWhiteWalkers = false;
      return stark.name;
    }
  }

  leave(stark) {
    var tempArray = []
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i] != stark) {
        tempArray.push(stark);
      }
    };
    this.starksToProtect = tempArray;
    stark.safe = false;
    stark.houseWords = 'Winter is Coming';
  }
}

module.exports = Direwolf;