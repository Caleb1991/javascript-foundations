class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false;

    this.completeTransformation = function() {
      if (this.form == 'wolf') {
        this.form = 'human';
        this.hungry = false;
        return 'Where are I?';
      } else {
        this.form = 'wolf';
        this.hungry = true;
        return 'Aaa-Woooo!';
      }
    };

    this.eatVictim = function(victim) {
      if (victim.alive && this.form == 'wolf') {
        victim.alive = false;
        this.form = 'human'
        this.hungry = false
        return `Yum, ${victim.name} was delicious.`
      } else {
        return `No way am I eating ${victim.name}, I'd like a burger!`;
      }
    };
  }
}

module.exports = Werewolf