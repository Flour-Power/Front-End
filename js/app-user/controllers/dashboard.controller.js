let DashboardController = function($scope, DashboardService, $state) {
  
  let vm = this;

  vm.message = 'hello';

  DashboardService.getDashboard().then( (res) => {
    vm.recipes= res.data.results;
    console.log(vm.recipes);
    return vm.recipes;
  });

  // $scope.addRecipe = function() {
  //   DashboardService.add();
  // };  

};

DashboardController.$inject = ['$scope','DashboardService', '$state'];

export default DashboardController;