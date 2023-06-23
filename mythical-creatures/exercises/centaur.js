class Centaur {
  constructor(params) {
    this.name = params['name'];
    this.breed = params['type'];
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    if (!this.cranky && this.standing) {
      this.cranky = true;
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  };

  run() {
    if (!this.cranky && this.standing) {
      this.cranky = true;
      return 'Clop clop clop clop!!!';
    } else {
      return 'NO!';
    }
  };

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      return 'ZZZZ';
    }
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;