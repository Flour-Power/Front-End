let SingleRecipeController = function($scope, $stateParams, RecipeService, $state) {
  
  let vm = this;
  vm.recipe = [];

  activate();

  function activate () {
    RecipeService.getRecipe($stateParams.id).then( (res) => {
      vm.recipe = res.data;
      console.log('RECIPE', vm.recipe);
    });
  }

};

SingleRecipeController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

export default SingleRecipeController;