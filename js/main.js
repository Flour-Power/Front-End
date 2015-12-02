import angular from 'angular';

// Import jQuery & Foundaiton
import $ from 'jquery';
import 'foundation';

// Import our sub modules
import './app-core/index';
import './app-layout/index';
// import './app-recipes/index';

// Start it up
$(document).foundation();

// Set up a run block on an angular module to help with
// loading foundation after templates load
angular
  .module('app', ['app.core', 'app.layout'])
  .run( function ($rootScope) {
    // $viewContentLoaded comes from Ui Router
    $rootScope.$on('$viewContentLoaded', function (event, data) {
      $(document).foundation();
    });
  })
;

console.log('Hello, World');
