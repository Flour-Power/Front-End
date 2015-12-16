let IngredientsController = function($scope, $stateParams, RecipeService, $state) {

  $scope.ingredients = [];

  RecipeService.apiRecipe($stateParams.id).then( (res) => {
    $scope.recipe = res.data;
    $scope.ingredients = $scope.recipe.ingredients;
    console.log('INGREDIENTS', $scope.ingredients);
  });
  
};

IngredientsController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

export default IngredientsController;