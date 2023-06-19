class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ['Iris'] };
    this.disposition = 'Good natured';
    this.humanWards = []

    this.receiveBelief = function() {
      this.dust++;
    }

    this.believe = function() {
      this.dust += 10;
    }

    this.makeDresses = function(dresses) {
      for (var i = 0; i < dresses.length; i++) {
        this.clothes['dresses'].push(dresses[i]);
      }
    }

    this.becomeProvoked = function() {
      this.disposition = 'Vengeful';
    }

    this.replaceInfant = function(params) {
      if (this.disposition == 'Vengeful') {
        params['disposition'] = 'Malicious';
        this.humanWards.push(params);
        if (this.humanWards.length == 3) {
          this.disposition = 'Good natured';
        }
        return params;
      } else {
        return params;
      }
    }
  }
}

module.exports = Fairy;