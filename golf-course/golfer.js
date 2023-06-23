class Golfer {
  constructor(params) {
    this.name = params['name'];
    this.handicap = params['handicap'];
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var average = par + this.handicap;
    return `I usually shoot a ${average} on average.`;
  }

  playRound(course) {
    var difficultyFrustration = { hard: 500, moderate: 100 };
    this.frustration += difficultyFrustration[`${course.difficulty}`];
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(course) {
    var statement = "I love the "

    for (var i = 0; i < course.features.length; i++) {
      statement += course.features[i];
      if (i != course.features.length - 1) {
        statement += ' and ';
      } else {
        statement += ' on this course!';
      }
    }
    return statement
  }

  whatYaShoot(score) {
    if (score < 0 ) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    } else if (score > 0) {
      this.frustration += 20;
      return 'Doh!';
    } else {
      this.frustration -= 10;
      return 'Booyah!';
    }
  }
}

module.exports = Golfer;
