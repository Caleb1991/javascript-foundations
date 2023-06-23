class Magician {
  constructor(params) {
    this.name = `The Great ${params["name"]}`;
    this.assistant = params["assistant"];
    this.favoriteAccessory = params["clothing"] ? params["clothing"] : 'top hat';
    this.confidencePercentage = 10;
  }

  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`;
  };

  performTrick() {
    this.confidencePercentage += 10;
    return `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`;
  };

  performShowStopper() {
    if (this.confidencePercentage > 90 && this.assistant) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!';
    }
  }
}

module.exports = Magician;