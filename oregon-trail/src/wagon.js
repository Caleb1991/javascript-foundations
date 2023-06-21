class Wagon {
  constructor(params) {
    this.title = params['name'];
    this.wheels = params['wheels'] ? params['wheels'] : [];
    this.axles = params['axles'] ? params['axles'] : [];
    this.oxen = params['oxen'] ? params['oxen'] : [];
    this.yokes = params['yokes'] ? params['yokes'] : [];
    this.food = params['food'];
    this.ammunition = params['ammunition'];
    this.clothes = params['clothes'];
    this.settlers = params['settlers'] ? params['settlers'] : [];

    this.addPart = function(part) {
      const partsHash = { 'wheel': this.wheels, 'axle': this.axles, 'ox': this.oxen, 'yoke': this.yokes }

      partsHash[part.type].push(part)
    }

    this.workingParts = function(partList) {
      var totalWorking = partList.length;
      for (var part of partList) {
        if (part.broken) {
          totalWorking--;
        }
      }
      return totalWorking;
    }

    this.livingSettlers = function(settlersList) {
      var livingSettlers = settlersList.length;
      for (var settler of settlersList) {
        if (settler.status == 'dead') {
          livingSettlers--;
        }
        return livingSettlers;
      }
    }

    this.canTravel = function() {
      const validWheels = this.workingParts(this.wheels) >= 4;
      const validAxles = this.workingParts(this.axles) >= 2;
      const validOxen = this.workingParts(this.oxen) >= 2;
      const validYokes = this.workingParts(this.yokes) >= 1;
      const validSettlers = this.livingSettlers(this.settlers) >= 1;
      const oxenToYokes = this.workingParts(this.yokes)*2 >= this.workingParts(this.oxen);

      if (validWheels && validAxles && validOxen && validYokes && validSettlers && oxenToYokes) {
        return true;
      } else {
        return false;
      }
    }

  }
}

module.exports = Wagon;