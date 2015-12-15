import angular from 'angular';
import 'angular-ui-router';

import '../app-core/index';
import '../app-user/index';
import '../app-recipes/index';

import HomeController from './controllers/home.controller';
import SearchController from './controllers/search.controller';

import HomeService from './services/home.service';
import RecipeService from '../app-recipes/services/recipe.service';
// import DashboardService from '.../services/dashboard.service';

angular
  .module('app.layout', ['app.core'])
  .controller('HomeController', HomeController)
  .controller('SearchController', SearchController)
  .service('HomeService', HomeService)
  .service('RecipeService', RecipeService)
  // .service('DashboardService', DashboardService)   
;