class VendingMachine {
  constructor(params) {
    this.id = params.id;
    this.isBroken = params.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    if (!this.alreadyStocked(snack.name)) {
      this.snacks.push(snack);
    } else {
      return 'Sorry, that snack is already stocked! Try adding a different snack.';
    }
  }

  alreadyStocked(snackName) {
    for (var snack of this.snacks) {
      if (snack.name == snackName) {
        return true;
      }
    }
    return false;
  }

  purchaseSnack(name, amount) {
    for (var snack of this.snacks) {
      if (snack.name == name) {
        if (snack.itemsInStock == 0) {
          return 'Sorry, no items in stock. Try another item.';
        } else if (snack.price > amount) {
          return 'Sorry, not enough payment. Please add more money.';
        }
        var change = amount - snack.price; 
        snack.removeItem();
        return `Success! Here is $${change} back!`;
      }
    }
  }
}

module.exports = VendingMachine;
