let AddRecipeController = function(RecipeService) {
  
  let vm = this;

  vm.addRecipe = addRecipe;

  function addRecipe (recipeObj) {
    RecipeService.addRecipe(recipeObj).then( (res) => {
      console.log(res);
    });
  }

};

AddRecipeController.$inject = ['RecipeService'];

export default AddRecipeController;