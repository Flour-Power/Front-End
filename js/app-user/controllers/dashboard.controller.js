let DashboardController = function($scope, DashboardService, $state) {
  
  let vm = this;

  vm.recipes = [];

  vm.message = 'hello';

  activate();


  function activate () {
    DashboardService.getDashboard().then( (res) => { 
      vm.recipes = res.data.recipes;
      console.log(vm.recipes);
      vm.recipes.forEach( function (category) {
        vm.category = category.category;
        console.log('Category: ', category.category);
        category.recipes.forEach( function (recipe) {
          vm.singleRecipe = recipe.name;
          console.log('Recipe:', recipe.name);
        });
      });
      // return vm.recipes;
    });
  }
  // $scope.addRecipe = function() {
  //   DashboardService.add();
  // };  

};

DashboardController.$inject = ['$scope','DashboardService', '$state'];

export default DashboardController;