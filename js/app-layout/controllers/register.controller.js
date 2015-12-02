let RegisterController = function($scope, UserService) {

  $scope.signUp = function(user) {
    UserService.register(user);
    
  };
  
};

RegisterController.$inject = ['$scope' , 'UserService'];

export default RegisterController;