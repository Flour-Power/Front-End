let UserService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);

  this.register = function (user) {
    return $http.post(SERVER.URL + 'users/new', user);
  };
  
  this.checkAuth = function () {

    let token = $cookies.get('auth-token');

    SERVER.CONFIG.headers['auth-token'] = token;
    
    if (token) {
      return $http.get(SERVER.URL + 'check', SERVER.CONFIG);
    } else {
      $state.go('access.login');
    }

  };

  this.sendLogin = function (user) {
    return $http.post(SERVER.URL + 'users', user, SERVER.CONFIG);
  };

  this.loginSuccess = function (res) {
    $cookies.put('auth-token', res.data.auth_token);
    SERVER.CONFIG.headers['auth-token'] = res.data.auth_token;
    $state.go('root.home');
  };

  this.logout = function () {
    $cookies.remove('authToken');
    SERVER.CONFIG.headers['auth-token'] = null;
    $state.go('root.login');
  };

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;