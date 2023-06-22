class Part {
  constructor(params) {
    this.name = params.name;
    this.type = params.type;
    this.value = params.value;
    this.broken = false;
    
    this.checkForValidity = function() {
      var string = 'This part needs a'
      if (this.name == undefined) {
        return string += ' name!';
      } else if (this.type == undefined) {
        return string += ' type!';
      } else if (this.value == undefined) {
        return string += ' value!';
      } else {
        return true;
      }
    }
    
    this.isValid = this.checkForValidity() == true
  }
}

module.exports = Part;