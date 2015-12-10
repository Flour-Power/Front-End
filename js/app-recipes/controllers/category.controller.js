let CategoryController = function($scope, $stateParams, RecipeService, $state) {
  
  let vm = this;

  vm.catRecipes = [];
  
  activate();


  function activate () {
  
    RecipeService.getCategoryRecipes($stateParams.id).then( (res) => { 
      vm.catRecipes = res.data.recipes;
      console.log('3:', vm.catRecipes);
    }); 
  }

};

CategoryController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

export default CategoryController;