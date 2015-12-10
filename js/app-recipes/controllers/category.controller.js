let CategoryController = function($scope, CategoryService, $state) {
  
  let vm = this;

  vm.catRecipes = [];
  
  activate();


  function activate () {
  
    CategoryService.getCategoryRecipes().then( (res) => { 
      vm.catRecipes = res.data.recipes;
      console.log('3:', vm.catRecipes);
    }); 
  }

};

CategoryController.$inject = ['$scope','CategoryService', '$state'];

export default CategoryController;