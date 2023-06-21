class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.timesBroken = 0;

    this.break = function() {
      this.broken = true;
      this.timesBroken++;
    }

    this.repair = function() {
      if (this.timesBroken >= 2) {
        return `This ${this.type} has seen better days, we'll need a brand new one!`;
      } else {
        this.broken = false;
      }
    }
  }
}

module.exports = Part;
