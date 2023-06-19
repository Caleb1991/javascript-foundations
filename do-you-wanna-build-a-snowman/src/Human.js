var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = { snowballs: 0, coal: 0, buttons: 0, carrots: 0 };

    this.gatherMaterials = function(material, quantity) {
      this.materials[`${material}`] += quantity;
    }

    this.buildASnowman = function() {
      var snowman = new Snowman(this.materials);
      return snowman;
    }

    this.placeMagicHat = function(snowman) {
      if (snowman.canWearMagicHat()) {
        snowman.canWearMagicHat();
        return 'Woah, this snowman is coming to life!';
      } else {
        return "I guess I didn't build it correctly."
      }
    }
  }
}

module.exports = Human;