let DashboardController = function($scope, DashboardService, $state) {
  
  let vm = this;

  // vm.recipes = [];

  vm.message = 'hello';

  activate();


  function activate () {
    DashboardService.getDashboard().then( (res) => { 
      vm.recipes = res.data.recipes;
      console.log(vm.recipes);
      // return vm.recipes;
    });
  }
  // $scope.addRecipe = function() {
  //   DashboardService.add();
  // };  

};

DashboardController.$inject = ['$scope','DashboardService', '$state'];

export default DashboardController;