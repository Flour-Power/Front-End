import angular from 'angular';
import '../app-core/index';



import CategoryController from './controllers/category.controller';
import CategoryService from './services/category.service';



angular
  .module('app.recipes', ['app.core'])
  .controller('CategoryController', CategoryController)
  .service('CategoryService', CategoryService)
;
