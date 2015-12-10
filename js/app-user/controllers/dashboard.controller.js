let DashboardController = function($scope, DashboardService, $state) {
  
  let vm = this;

  vm.recipes = [];
  vm.categories = [];
  vm.categoryNames = [];

  vm.message = 'hello';
  // vm.clicked = clicked;

  activate();


  function activate () {
    DashboardService.getDashboard().then( (res) => { 
      vm.recipes = res.data.recipes;
      console.log(vm.recipes);
      // vm.recipes.forEach( function (recipe) {
      //   // vm.category = recipes.category;
      //   // console.log('Category: ', category.category);
      //   recipe.categories.forEach( function (category) {
      //     // vm.singleRecipe = recipe.name;
      //     console.log('Recipe:', recipe.name);
      //   });

      // });
      // return vm.recipes;
    });

    // DashboardService.getRecipes().then( (res) => { 
    //   vm.categories = res.data.recipes;
    //   console.log('categories:', vm.categories);
    //     vm.categories.forEach( function (recipes) {
    //       vm.categoryNames = recipes.category;
    //       console.log('labels:', vm.categoryNames);
    //     });
    // });

    // DashboardService.getCategories().then( (res) => { 
    //   vm.categories = res.data.categories;
    //   console.log('categories:', vm.categories);
    // });

  }

  // function clicked (category) {
  //   console.log('clicked', category.id);
  // }

 
};

DashboardController.$inject = ['$scope','DashboardService', '$state'];

export default DashboardController;