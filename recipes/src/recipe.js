class Recipe {
  constructor(params) {
    this.name = params['name'];
    this.ingredients = params['ingredients'];
    this.attempted = false;
    this.rating = null;
  }

  rateRecipe(rating) {
    this.attempted = true;
    this.rating = rating;
  }

  changeIngredientAmount(name, amount) {
    for (var ingredient of this.ingredients) {
      if (ingredient.name == name) {
        ingredient.amount = amount;
      }
    }
  }

  generateGroceryList() {
    var list = "You need: ";

    for (var item of this.ingredients) {
      if (this.ingredients.indexOf(item) == this.ingredients.length - 1) {
        list += `${item.amount} ${item.name}.`;
      } else {
        list += `${item.amount} ${item.name}, `;
      }
    }
    return list;
  }
}

module.exports = Recipe;
