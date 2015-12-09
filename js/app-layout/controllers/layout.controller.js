let LayoutController = function($scope, LayoutService, $state) {
  
  let vm = this;

  vm.categories = [];

  activate();


  function activate () {
    LayoutService.getCategories().then( (res) => { 
      vm.recipes = res.data.recipes;
      console.log(vm.recipes);
      // vm.recipes.forEach( function (recipe) {
      //   // vm.category = recipes.category;
      //   // console.log('Category: ', category.category);
      //   recipe.categories.forEach( function (category) {
      //     // vm.singleRecipe = recipe.name;
      //     console.log('Recipe:', recipe.name);
      //   });
        
      // });
      // return vm.recipes;
    });
  }
  // $scope.addRecipe = function() {
  //   DashboardService.add();
  // };  

};

LayoutController.$inject = ['$scope','LayoutService', '$state'];

export default LayoutController;