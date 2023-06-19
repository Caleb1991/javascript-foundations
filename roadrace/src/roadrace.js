class Roadrace {
  constructor(params) {
    this.name = params['title'];
    this.location = params['city'];
    this.distance = 0;
    this.participants = [];

    this.setDistance = function(distance) {
      this.distance = distance;
      return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
    }

    this.registerParticipants = function(runner) {
      this.participants.push(runner);
    }

    this.completeRace = function() {
      for (var i = 0; i < this.participants.length; i++) {
        this.participants[i].runRace(this.name, this.distance);
      }
    }
  }
}

module.exports = Roadrace;
