let SearchController = function($scope, $stateParams, HomeService, $state) {

  let vm = this;
  console.log(this);

  vm.searchResults = [];
  vm.resultNames = [];
  

  activate();


  function activate () {
    HomeService.search($stateParams.query).then( (res) =>{
      console.log(res.data.recipes);
      vm.searchResults = res.data.recipes;
      console.log(vm);
      vm.searchResults.forEach( function(recipes) {
        vm.resultNames = recipes.name;
        console.log('DUDE', vm.resultNames);
      });
      $state.go('root.search');
      console.log('RESULTS',vm.searchResults);

    });
  }
};

SearchController.$inject = ['$scope', '$stateParams', 'HomeService','$state'];

export default SearchController;



