class Snowman {
  constructor(params) {
    this.carrots = params['carrots'];
    this.coal = params['coal'];
    this.buttons = params['buttons'];
    this.snowballs = params['snowballs'];
    this.magicHat = false;
    this.isWearingHat = false;
  }

  canWearMagicHat() {
    if (this.coal < 2 || this.carrots < 1 || this.buttons < 5 || this.snowballs < 2) {
      return false;
    } else {
      this.magicHat = true;
      this.isWearingHat = true;
      return this.isWearingHat;

    }
  }
}

module.exports = Snowman;