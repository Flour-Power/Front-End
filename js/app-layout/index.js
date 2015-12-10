import angular from 'angular';
import 'angular-ui-router';

import '../app-core/index';
import '../app-user/index';

import HomeController from './controllers/home.controller';

import HomeService from './services/home.service';
// import DashboardService from '.../services/dashboard.service';

angular
  .module('app.layout', ['app.core'])
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
  // .service('DashboardService', DashboardService)   
;