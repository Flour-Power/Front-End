import angular from 'angular';
import '../app-core/index';


import DashboardController from './controllers/dashboard.controller';
import DashboardService from './services/dashboard.service';


angular
  .module('app.user', ['app.core'])
  .controller('DashboardController', DashboardController)
  .service('DashboardService', DashboardService)
;
