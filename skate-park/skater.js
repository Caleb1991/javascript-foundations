class Skater {
  constructor(params) {
    this.name = params.name;
    this.skill = params.skill;
    this.tricks = params.tricks;
    this.money = params.cash;
    this.frustration = 0;
    this.practicedTricks = {}

    this.practice = function(trickName) {
      if (!this.tricks[trickName]) {
        this.frustration++;
        if (this.practicedTricks.trickName) {
          this.practicedTricks.trickName++;
          return this.practicePaysOff(trickName);
        } else {
          this.practicedTricks.trickName = 1;
        }
      }
    }

    this.practicePaysOff = function(trickName) {
      if (this.practicedTricks.trickName == 3) {
        delete this.practicedTricks.trickName
        this.frustration = 0;
        this.tricks[trickName] = true;
        return `I just learned to ${trickName}!!!`;
      }
    }
  }
}

module.exports = Skater;