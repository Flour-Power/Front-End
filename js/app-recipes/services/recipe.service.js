let RecipeService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;
  
  this.getCategoryRecipes = function(id) {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/categories' + '/' + id + '/recipes',
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
  };

  this.getRecipe = function(id) {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/recipes' + '/' + id,
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
  };

};

RecipeService.$inject = ['$http', 'SERVER', '$cookies'];

export default RecipeService;