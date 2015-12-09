let HomeService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);

  // Check Authentication
  this.checkAuth = function () {

    let token = $cookies.get('auth-token');

    SERVER.CONFIG.headers['auth-token'] = token;
    
    console.log('checkAuth is running', token);
    
    if (token) {
      // return $http.get(SERVER.URL + 'check', SERVER.CONFIG);
    } else {
      $state.go('root.home');
    }
  };
  
  // Register New User

  //User Constructor
  let User = function(user) {
    this.email = user.email;
    this.password = user.password;
    console.log('hiiii');
  };
  
  // Register New User 
  this.register = function(user) {
    console.log(user);

    let u = new User(user);

    return $http.post(SERVER.URL + '/users/new', u).then((res) => {
      console.log(res);

      //With Successful Registration
      $cookies.put('auth-token', res.data.user.auth_token);
      $cookies.put('id', res.data.user.id);

      SERVER.CONFIG.headers['auth-token'] =  res.data.user.auth_token;
      $state.go('root.dashboard');
    });
  };

  // User Login
  this.sendLogin = function (user) {
    return $http.post(SERVER.URL + '/users', user, SERVER.CONFIG);
  };

  this.loginSuccess = function (res) {
    console.log('hi');
    $cookies.put('auth-token', res.data.auth_token);
    SERVER.CONFIG.headers['auth-token'] = res.data.auth_token;
    $state.go('root.dashboard');
  };

  // Logout
  this.logout = function () {
    $cookies.remove('auth-token');
    SERVER.CONFIG.headers['auth-token'] = null;
    $state.go('root.home');
  };


  
};

HomeService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default HomeService;