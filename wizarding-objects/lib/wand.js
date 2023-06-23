class Wand {
  constructor(type, size, core) {
    this.type = type;
    this.size = size;
    this.core = core;
  }

  cast(spellName) {
    return `Casting ${spellName}!`;
  }
}

module.exports = Wand;