let SearchController = function($scope, $http, RecipeService) {
  
  // let url = '';

  $scope.searchInput = (query) => { 
    query = encodeURI(query);

    function searchApi (query) {
      RecipeService.searchApi(query).then( (res) => {
        $scope.apiSearchResults = res.data;
      });
    }

  };
  
  function change (query) {
    console.log(query);
  }

  $scope.change = change;
};

SearchController.$inject = ['$scope', '$http', 'RecipeService'];

export default SearchController;