class Settler {
  constructor(params) {
    this.name = params['name'];
    this.age = params['age'];
    this.nationality = params['nationality'] ? params['nationality'] : 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(stressor) {
    if (this.status != 'dead') {
      this.ailments.push(stressor);
      let hash = {1: 'fair', 2: 'poor', 3: 'dead'};
      this.status = hash[this.ailments.length];
    }
  }

  heal() {
    if (this.status != 'dead') {
      this.ailments = [];
      this.status = 'healthy';
    } else {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    }
  }
}

module.exports = Settler;