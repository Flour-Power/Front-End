let HomeController = function($scope, HomeService, DashboardService, $cookies, $state) {



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
    console.log(user);
    HomeService.sendLogin(user).then( (res) => {
      console.log(res);
      HomeService.loginSuccess(res);
      console.log(res);
    });
  };

  // Logout of Session
  $scope.logmeout = function() {
    HomeService.logout();
  };  
  
  // $scope.activate = function () {
  //   HomeService.getCategories().then( (res) => { 
  //     vm.categories = res.data.categories;
  //     console.log('categories:', vm.categories);
  //   });
  // };
};

HomeController.$inject = ['$scope', 'HomeService', 'DashboardService', '$cookies', '$state'];

export default HomeController;