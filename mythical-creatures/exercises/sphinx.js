class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length == 3) {
      this.riddles.shift();
    }
      this.riddles.push(riddle);
  }

  attemptAnswer(answer) {
    const riddlesBeginningLength = this.riddles.length;
    var tempArray = []

    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i]['answer'] != answer) {
        tempArray.push(this.riddles[i]);
      }
    }

    this.riddles = tempArray;

    if (this.riddles.length < riddlesBeginningLength && this.riddles.length > 0) {
      return "That wasn't that hard, I bet you don't get the next one";
    } else if (this.riddles.length == 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
    } else {
      this.heroesEaten++;
    }
  }
}

module.exports = Sphinx;