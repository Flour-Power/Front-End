let DashboardService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;
  
  this.getDashboard = getDashboard;


  function getDashboard() {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/recipes' + '?categorized=false',
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
  }

  // this.getRecipes = function() {
  //   let token = $cookies.get('auth-token');
  //   return $http({
  //     url: url + '/recipes',
  //     method: 'GET',
  //     headers: {
  //       auth_token: token
  //     }
  //   });
  // };
  
  // this.getCategories = function() {
  //   let token = $cookies.get('auth-token');
  //   return $http({
  //     url: url + '/categories',
  //     method: 'GET',
  //     headers: {
  //       auth_token: token
  //     }
  //   });
  // };


};

DashboardService.$inject = ['$http', 'SERVER', '$cookies'];

export default DashboardService;