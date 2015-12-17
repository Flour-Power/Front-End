let CategoryController = function($scope, $stateParams, RecipeService, $state) {
  
  let vm = this;

  vm.catRecipes = [];
  vm.categories = [];
  
  activate();


  function activate () {
  
    RecipeService.getCategoryRecipes($stateParams.id).then( (res) => { 
      vm.catRecipes = res.data.recipes;
      console.log('Recipes In This Category:', res);
    }); 

    RecipeService.getCategories().then( (res) => { 
      vm.categories = res.data.categories;
      console.log('Kategories:', vm.categories);
    }); 
  }

};

CategoryController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

export default CategoryController;