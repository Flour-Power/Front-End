let DashboardService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;
  // Get User By Id
  // Render Index of User's Recipes
  

  this.getDashboard = function(id) {
    let token = $cookies.get('auth-token');
    console.log(this);
    return $http({
      url: url + '/categories',
      method: 'GET',
      headers: {
        auth_token: token
      },
      data: {
      }
    });
  
  };

  // this.add = function () {
  //   $state.go('root.add-recipe');
  // };
};

DashboardService.$inject = ['$http', 'SERVER', '$cookies'];

export default DashboardService;