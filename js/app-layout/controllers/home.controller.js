let HomeController = function($scope, $http, HomeService, DashboardService, $cookies, $state) {



  // Authentication
  let promise = HomeService.checkAuth();

  if (promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Not Authorized') {
        $state.go('home');
      } else {
        $state.go('root.dashboard');
        $scope.message = 'I am logged in';
      }
    });
  }

  // Register User
  $scope.register = function(user) {
    console.log(user);
    HomeService.register(user);
  };

  // Login into Session
  $scope.login = function (user) {
    console.log('hello', user);
    HomeService.sendLogin(user).then( (res) => {
      console.log(res);
      HomeService.loginSuccess(res);
      console.log(res);
    });
  };

  // Logout of Session
  $scope.logout = function() {
    HomeService.logout();
  };  

  // Search Function
  $scope.search = function(query) {
    console.log(query);
    $state.go('root.search', { query: query });
  };

  //Categories


  // $scope.getCategories = function() {
  //   let vm = this;

  //   vm.recipes = [];
  //   vm.categories = [];
    
  //   HomeService.getCategories().then( (res) => { 
  //     vm.categories = res.data.categories;
  //     console.log('LAYOUTcategories:', vm.categories);
  //   });
  // };
  
};



HomeController.$inject = ['$scope', '$http', 'HomeService', 'DashboardService', '$cookies', '$state'];

export default HomeController;