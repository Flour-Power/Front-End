let LayoutService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;
  
  this.getCategories = function() {
    let token = $cookies.get('auth-token');
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
};

LayoutService.$inject = ['$http', 'SERVER', '$cookies'];

export default LayoutService;