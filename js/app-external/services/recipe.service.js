let RecipeService = function($http, SERVER, $cookies) {
  
  let url = SERVER.URL;

  this.getCategoryRecipes = getCategoryRecipes;
  this.getCategories      = getCategories;
  this.getRecipe          = getRecipe;
  this.addRecipe          = addRecipe;
  this.apiRecipe          = apiRecipe;

  function Recipe (recipeObj) {
    this.name        = recipeObj.name;
    this.categories  = recipeObj.category_names;
    this.steps       = recipeObj.steps.split(';');
    this.ingredients = recipeObj.ingredients;
    this.itemName    = recipeObj.ingredients.name;
    this.itemAmount  = recipeObj.ingredients.amount;
    this.itemUnit    = recipeObj.ingredients.unit;
    this.image       = recipeObj.my_image;

  }

  function getCategories () {
    let token = $cookies.get('auth-token');
    return $http({
      url: url + '/categories',
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
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

  //Get Recipe from API 
  function apiRecipe(id) {
    let token = $cookies.get('auth-token');
    console.log(id);
    return $http({
      url: url + '/api/recipes' + '/' + id,
      method: 'GET',
      headers: {
        auth_token: token
      }
    });
  }

};

RecipeService.$inject = ['$http', 'SERVER', '$cookies'];

export default RecipeService;