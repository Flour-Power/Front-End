import angular from 'angular';

import '../app-core/index';
// import '../app-user/index';


import CategoryController from './controllers/category.controller';
import AddRecipeController from './controllers/add-recipe.controller';
import SingleRecipeController from './controllers/singleRecipe.controller';
import DirectionsController from './controllers/directions.controller';
import IngredientsController from './controllers/ingredients.controller';
// import SearchController from '../app-recipes/controllers/search.controller';

import RecipeService from './services/recipe.service';
// import DashboardService from '../app-user/services/dashboard.service';



angular
  .module('app.recipes', ['app.core'])
  .controller('CategoryController', CategoryController)
  .controller('AddRecipeController', AddRecipeController)
  .controller('SingleRecipeController', SingleRecipeController)
  .controller('DirectionsController', DirectionsController)
  .controller('IngredientsController', IngredientsController)
  // .controller('SearchController', SearchController)
  .service('RecipeService', RecipeService)
  // .service('DashboardService', DashboardService) 
;
