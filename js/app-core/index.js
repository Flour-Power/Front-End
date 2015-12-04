import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .constant('SERVER', {
    URL: 'http://flour-power.herokuapp.com',
    CONFIG: {
      headers: {}
    }
  })
  .config(config)
;