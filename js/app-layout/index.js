import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import HomeController from './controllers/home.controller';
import LoginController from './controllers/login.controller';
import RegisterController from './controllers/register.controller';

import UserService from './services/user.service';

angular
  .module('app.layout', ['ui.router', 'ngCookies'])
  .constant('SERVER', {
    URL: 'https://flour-power.herokuapp.com/',
    CONFIG: {
      headers: {}
    }
  })
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .service('UserService', UserService)
;