class Unicorn{
  constructor(name, color = 'white'){
    this.name = name
    this.color = color
    this.isWhite = function() {
      return color === 'white'
    }

    this.says = function(saying) {
      return '**;* ' + saying + ' *;**'
    }
  }
}

module.exports = Unicorn;
