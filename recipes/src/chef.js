var Recipe = require('../src/recipe.js');

class Chef {
  constructor(name, recipes) {
    this.name = name;
    this.recipeBox = recipes;

    this.tryRecipe = function(dishName, rating) {
      for (var recipe of this.recipeBox) {
        if (recipe.name == dishName) {
          recipe.rateRecipe(rating);
        }
      }
    }

    this.addRecipe = function(name, ingredients) {
      var recipe = new Recipe({ name: name, ingredients: ingredients });

      this.recipeBox.push(recipe);
    }

    this.changeRecipe = function(dishName, ingredientName, changedAmount) {
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
}

module.exports = Chef;
