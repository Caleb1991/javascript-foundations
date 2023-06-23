class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }

  execute(target) {
    const string = `Success! You've cast a spell on the `;
    var finalString = ''
    if (target instanceof Array) {
      for (var item of target) {
        this.executionHistory.push(item);
        finalString += string + `${item}. `; 
      }
      return finalString.slice(0, finalString.length - 1);
    } else {
      this.executionHistory.push(target);
      return string + `${target}.`;
    }
  }

  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;