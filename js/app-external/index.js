import angular from 'angular';

import '../app-core/index';



// import CategoryController from './controllers/category.controller';
// import AddRecipeController from './controllers/add-recipe.controller';
// import SingleRecipeController from './controllers/singleRecipe.controller';
import DirectionsController from './controllers/directions.controller';
import IngredientsController from './controllers/ingredients.controller';
import ApiRecipeController from './controllers/recipe-api.controller';


import RecipeService from './services/recipe.service';




angular
  .module('app.external', ['app.core'])
//   .controller('CategoryController', CategoryController)
//   .controller('AddRecipeController', AddRecipeController)
//   .controller('SingleRecipeController', SingleRecipeController)
  .controller('DirectionsController', DirectionsController)
  .controller('IngredientsController', IngredientsController)
  .controller('ApiRecipeController', ApiRecipeController)
//   .service('RecipeService', RecipeService)

;
