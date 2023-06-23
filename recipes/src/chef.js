var Recipe = require('../src/recipe.js');

class Chef {
  constructor(name, recipes) {
    this.name = name;
    this.recipeBox = recipes;
  }

  tryRecipe(dishName, rating) {
    for (var recipe of this.recipeBox) {
      if (recipe.name == dishName) {
        recipe.rateRecipe(rating);
      }
    }
  }

  addRecipe(name, ingredients) {
    var recipe = new Recipe({ name: name, ingredients: ingredients });

    this.recipeBox.push(recipe);
  }

  changeRecipe(dishName, ingredientName, changedAmount) {
    for (var recipe of this.recipeBox) {
      if (recipe.name == dishName) {
        for (var ingredient of recipe.ingredients) {
          if (ingredient.name == ingredientName) {
            ingredient.changeAmount(changedAmount);
          }
        }
      }
    }
  }
}

module.exports = Chef;
