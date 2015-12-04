let config = function($stateProvider, $urlRouterProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

  // Set up some States
  $stateProvider
    .state('access', {
      abstract: true,
      templateUrl: 'templates/app-layout/access-layout.tpl.html'
    })
    .state('access.welcome', {
      url: '/',
      templateUrl: 'templates/app-layout/welcome.tpl.html'
    })
    .state('access.register', {
      url: '/signup',
      controller: 'RegisterController as vm',
      templateUrl: 'templates/app-layout/register.tpl.html'
    })
    .state('access.login', {
      url: '/users',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-layout/login.tpl.html'
    })
     .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
     .state('root.home', {
      url: '/home',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    });

};

   
config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;