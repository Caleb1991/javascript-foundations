class Ogre {
  constructor(params) {
    this.name = params['name'];
    this.home = params['abode'] ? params['abode'] : 'Swamp';
    this.swings = 0;

    this.encounter = function(human) {
      human.encounterCounter++;
      if (human.noticesOgre()) {
        this.swingAt(human);
      }
    }

    this.swingAt = function(human) {
        this.swings++;
        if (this.swings == 2) {
          human.knockedOut = true;
        }
    }

    this.apologize = function(human) {
      human.knockedOut = false;
    }
  }
}

module.exports = Ogre;