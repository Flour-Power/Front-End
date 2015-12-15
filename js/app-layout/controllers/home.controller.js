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
  $scope.logmeout = function() {
    HomeService.logout();
  };  

  //Search Function

  // $scope.search = function(query) {

  //   $state.go('root.search', { query: query });
  //   console.log(this);

  //   console.log(query);

  //   // HomeService.search(query).then( (res) =>{
  //   //   console.log(res.data.recipes);
  //   //   vm.searchResults = res.data.recipes;
  //   //   console.log(vm);
  //   //   // vm.searchResults.forEach( function(recipes) {
  //   //   //   vm.resultNames = recipes.name;
  //   //   //   console.log('DUDE', vm.resultNames);
  //   //   // });
  //   //   // $state.go('root.search');
  //   //   // console.log('RESULTS',vm.searchResults);
  
  //   // });
  // };
  
};



HomeController.$inject = ['$scope', '$http', 'HomeService', 'DashboardService', '$cookies', '$state'];

export default HomeController;