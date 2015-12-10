let CategoryController = function($scope, $stateParams, RecipeService, $state) {
  
  let vm = this;

  vm.catRecipes = [];
  
  activate();


  function activate () {
  
    RecipeService.getCategoryRecipes($stateParams.id).then( (res) => { 
      vm.catRecipes = res.data.recipes;
      console.log('Recipes In This Category:', vm.catRecipes);
    }); 
  }

};

CategoryController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

export default CategoryController;