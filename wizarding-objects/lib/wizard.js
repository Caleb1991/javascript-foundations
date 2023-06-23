class Wizard {
  constructor(params) {
    this.name = params.name;
    this.pets = [];
    this.petsCount = 0;
    this.wand = null;
  }

  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount++;
  }

  petList() {
    let string = ''
    for (let i = 0; i < this.pets.length; i++) {
      let vowels = ['a', 'e', 'i', 'o', 'u']
      let beginning = vowels.includes(this.pets[i].type[0]) ? 'An ' : 'A ';
      let ending = i + 1 === this.pets.length ? '.' : '; ';
      string = string + `${beginning}${this.pets[i].type} named ${this.pets[i].name}${ending}`;
    }
    return string;
  }
  
  getWand(wand) {
    this.wand = wand;
  }

  castSpell(spellName) {
    return this.wand.cast(spellName);
  }
}

module.exports = Wizard;