let RecipeService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;

  this.getCategoryRecipes = getCategoryRecipes;
  this.getRecipe          = getRecipe;
  this.addRecipe          = addRecipe;

  function Recipe (recipeObj) {
    this.name        = recipeObj.name;
    this.categories    = Array(recipeObj.category_names);
    this.steps       = Array(recipeObj.steps);
    this.ingredients = Array(recipeObj.ingredients);
    this.image       = recipeObj.my_image;
  }

  function getCategoryRecipes(id) {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/categories' + '/' + id + '/recipes',
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
  }

  function getRecipe(id) {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/recipes' + '/' + id,
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
  }

  function addRecipe(recipeObj) {
    let token = $cookies.get('auth-token');
    let r = new Recipe(recipeObj);

    return $http({
      url: url + '/recipes',
      method: 'POST',
      headers: {
        auth_token: token
      }
    });
  }

};

RecipeService.$inject = ['$http', 'SERVER', '$cookies'];

export default RecipeService;