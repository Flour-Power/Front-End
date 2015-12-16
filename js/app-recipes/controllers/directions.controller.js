let DirectionsController = function($scope, $stateParams, RecipeService, $state) {

  $scope.directions = [];
 
  // RecipeService.getRecipe($stateParams.id).then( (res) => {
  //   console.log('Stuff', res);
  //   $scope.recipe = res.data;
  //   $scope.directions = $scope.recipe.directions;
  //   // console.log('DIRECTIONS', $scope.directions);
  // });

};

DirectionsController.$inject = ['$scope', '$stateParams', 'RecipeService', '$state'];

export default DirectionsController;