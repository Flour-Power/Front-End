let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider

    .state('root', {
      abstract: true,
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/app-layout/home.tpl.html',
      controller: 'HomeController as vm'
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
      url: '/recipes/:id',
      templateUrl: 'templates/app-recipes/recipe-single.tpl.html',
      controller: 'SingleRecipeController as vm'
    })
    .state('root.addRecipe', {
      url: '/add',
      templateUrl: 'templates/app-recipes/add-recipe.tpl.html',
      controller: 'AddRecipeController as vm'
    })
    .state('root.search', {
      url: '/search/:query',
      controller: 'SearchController as vm',
      templateUrl: 'templates/app-recipes/search.tpl.html'
    })
    .state('root.apiRecipe', {
      url: '/api/recipes/:id',
      controller: 'ApiRecipeController as vm',
      templateUrl: 'templates/app-recipes/recipe-api.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;