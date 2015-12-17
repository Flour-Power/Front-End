let DashboardController = function($scope, DashboardService, $state) {
  
  let vm = this;

  vm.recipes = [];
  vm.categories = [];
  vm.categoryNames = [];

  vm.message = 'Dashboard';

  activate();


  function activate () {
    DashboardService.getDashboard().then( (res) => { 
      vm.recipes = res.data.recipes;
      console.log(vm.recipes);
    });

    DashboardService.getCategories().then( (res) => { 
      vm.categories = res.data.categories;
      console.log('categories:', vm.categories);
    });

  }

};

DashboardController.$inject = ['$scope','DashboardService', '$state'];

export default DashboardController;