let SingleRecipeController = function(RecipeService, $stateParams) {
  
  let vm = this;

  activate();

  function activate () {
    RecipeService.getRecipe($stateParams.id).then( (res) => {
      vm.recipe = res.data;
      console.log('RECIPE', res);
    });
  }

};

SingleRecipeController.$inject = ['RecipeService', '$stateParams'];

export default SingleRecipeController;