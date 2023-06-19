class Craft {
  constructor(params) {
    this.name = params['type'];
    this.materials = params['materials'];
    this.completed = false;

    this.completeCraft = function() {
      this.completed = true;
      return 'All done! It looks great!';
    }

    this.calculateProjectTotal = function() {
      var totalCost = 0;
      for (var i = 0; i < this.materials.length; i++) {
        totalCost += this.materials[i].calculateMaterialCost();
      }
      return totalCost;
    }
;  }
}

module.exports = Craft;
