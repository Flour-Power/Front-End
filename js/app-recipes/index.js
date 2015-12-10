import angular from 'angular';
import '../app-core/index';



import CategoryController from './controllers/category.controller';
import SingleRecipeController from './controllers/singleRecipe.controller';
import RecipeService from './services/recipe.service';



angular
  .module('app.recipes', ['app.core'])
  .controller('CategoryController', CategoryController)
  .controller('SingleRecipeController', SingleRecipeController)
  .service('RecipeService', RecipeService)
;
