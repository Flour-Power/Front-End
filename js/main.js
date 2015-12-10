// Core Files
import angular from 'angular';
import 'angular-ui-router';

// Import jQuery & Foundaiton
import $ from 'jquery';
import 'foundation';


// Modules
import './app-core/index';
import './app-layout/index';
import './app-user/index';
import './app-recipes/index';

// Start it up
$(document).foundation();

// Set up a run block on an angular module to help with 
// loading foundation after templates load
angular
  .module('app', [ 'app.core', 'app.layout', 'app.user', 'app.recipes'])
  .run( function (HomeService, $rootScope) {

    // $stateChangeSuccess comes from Ui Router
    $rootScope.$on('$stateChangeSuccess', function () {
      HomeService.checkAuth();
    });

    // $viewContentLoaded comes from Ui Router
    $rootScope.$on('$viewContentLoaded', function (event, data) {
      $(document).foundation();
    });
  })
;

console.log('Hello, World');
