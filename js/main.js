import angular from 'angular';
import 'angular-ui-router';

// Import jQuery & Foundaiton
import $ from 'jquery';
import 'foundation';

// Start it up
$(document).foundation();

// Set up a run block on an angular module to help with
// loading foundation after templates load
angular
  .module('app', ['ui.router'])
  .run( function ($rootScope) {
    // $viewContentLoaded comes from Ui Router
    $rootScope.$on('$viewContentLoaded', function (event, data) {
      $(document).foundation();
    });
  })
;

console.log('Hello, World');
