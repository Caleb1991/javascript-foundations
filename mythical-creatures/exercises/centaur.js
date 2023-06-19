class Centaur {
  constructor(params) {
    this.name = params['name'];
    this.breed = params['type'];
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;

    this.shootBow = function() {
      if (!this.cranky && this.standing) {
        this.cranky = true;
        return 'Twang!!!';
      } else {
        return 'NO!';
      }
    };

    this.run = function() {
      if (!this.cranky && this.standing) {
        this.cranky = true;
        return 'Clop clop clop clop!!!';
      } else {
        return 'NO!';
      }
    };

    this.sleep = function() {
      if (this.standing) {
        return 'NO!';
      } else {
        this.cranky = false;
        return 'ZZZZ';
      }
    };

    this.layDown = function() {
      this.standing = false;
      this.layingDown = true;
    };

    this.standUp = function() {
      this.standing = true;
      this.layingDown = false;
    };

    this.drinkPotion = function() {
      if (this.standing) {
        this.cranky = false;
      } else {
        return "Not while I'm laying down!";
      }
    }
  }
}

module.exports = Centaur;