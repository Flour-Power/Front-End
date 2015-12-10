let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('root', {
      abstract: true,
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('register', {
      url: '/register',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/register.tpl.html'
    })
    .state('root.dashboard', {
      url: '/dashboard',
      controller: 'DashboardController as vm',
      templateUrl: 'templates/app-user/dashboard.tpl.html'
    })
    .state('root.category', {
      url: '/category/:id',
      templateUrl: 'templates/app-recipes/category.tpl.html',
      controller: 'CategoryController as vm'
    })
    .state('root.singleRecipe', {
      url: '/recipes/28',
      templateUrl: 'templates/app-recipes/recipe-single.tpl.html',
      controller: 'SingleRecipeController as vm'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;