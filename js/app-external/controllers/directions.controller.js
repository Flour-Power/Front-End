let DirectionsController = function($scope, $stateParams, RecipeService, $state) {

  $scope.directionsinternal = [];
  $scope.directions = [];
 
  RecipeService.getRecipe($stateParams.id).then( (res) => {
    $scope.recipe = res.data;
    $scope.directionsinternal = $scope.recipe.directions;
    console.log('STUFF1', $scope.directionsinternal);
  });
  RecipeService.apiRecipe($stateParams.id).then( (res) => {
    $scope.recipe = res.data;
    $scope.directions = $scope.recipe.directions;
    console.log('STUFF2', $scope.directions);
  });

};

DirectionsController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

export default DirectionsController;