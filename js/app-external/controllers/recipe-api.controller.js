let ApiRecipeController = function($scope, $stateParams, RecipeService, $state) {

  let vm = this;

  vm.recipe = [];
  vm.resultNames = [];
  

  activate();


  function activate () {
    RecipeService.apiRecipe($stateParams.id).then( (res) =>{
      vm.recipe = res.data;
      console.log('api recipe', vm.recipe);
    });

    RecipeService.getCategories().then( (res) => { 
      vm.categories = res.data.categories;
      console.log('categories:', vm.categories);
    });
  }

};

ApiRecipeController.$inject = ['$scope', '$stateParams', 'RecipeService','$state'];

export default ApiRecipeController;