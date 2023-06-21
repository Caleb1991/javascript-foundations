class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;

    this.checkForValidity = function() {
     const acceptedTypes = ['food', 'ammunition', 'clothes'];

      if (acceptedTypes.includes(this.type)) {
        return `Great, we'll need lots of ${this.type}!`;
      } else {
        let previousType = this.type;
        this.type = null;
        return `I don't think a ${previousType} will help us.`;
      }
    }
   }
}

module.exports = Gear;
