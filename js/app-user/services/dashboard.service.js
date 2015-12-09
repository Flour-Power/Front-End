let DashboardService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;
  // Get User By Id
  // Render Index of User's Recipes
  
  this.getDashboard = function() {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/recipes' + '?categorized=false',
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