var Part = require('../src/part');

class Ship {
  constructor(params) {
    this.name = params.name;
    this.type = params.type;
    this.maxCrew = params.maxCrew;
    this.odometer = params.odometer ? params.odometer : 0;
    this.fuelCapacity = params.fuelCapacity ? params.fuelCapacity : 10;
    this.fuel = 0;
    this.captain = params.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = params.parts ? params.parts : {};
    this.readyToFly = false;
  }

  addCrew(crewMembers) {
    for (var crewMember of crewMembers) {
      if (this.crew.length + 1 <= this.maxCrew && crewMember.constructor.name == 'Being'){
        this.crew.push(crewMember);
      }
    }
  }

  loadCargo(cargo) {
    if (cargo instanceof Part) {
      this.cargo.push(cargo);
    }
  }

  updatePart(part) {
    var existingPart = this.parts[part.type]
    if (existingPart) {
      const oldValue = existingPart.value;
      const newValue = part.value;
      const difference = oldValue - newValue;
      this.parts[part.type] = part;
      return difference;
    } else {
      this.parts[part.type] = part;
    }
  }

  checkReadiness() {
    var string = 'Cannot fly without '
    if (!this.captain) {
      return string + 'a captain';
    } else if (this.fuel == 0) {
      return string + 'fuel'
    } else if (Object.keys(this.parts).length == 0) {
      return string + 'parts';
    } else {
      this.readyToFly = true;
      return 'Good to go!';
    }
  }
}

module.exports = Ship;