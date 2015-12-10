let CategoryService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;
  
  this.getCategoryRecipes = function(id) {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/categories' + '/' + '3' + '/recipes',
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
  };

};

CategoryService.$inject = ['$http', 'SERVER', '$cookies'];

export default CategoryService;