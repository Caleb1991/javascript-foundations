class Skier {
  constructor(name, hasLiftTicket) {
    this.name = name;
    this.hasLiftTicket = hasLiftTicket;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';

    this.takeLesson = function() {
      this.skillLevel++;
    }

    this.pickSlope = function() {
      if (this.skillLevel == 3) {
        this.nextSlope = 'blue square';
      } else if (this.skillLevel == 5) {
        this.nextSlope = 'black diamond';
      }
    }
  }
}

module.exports = Skier;