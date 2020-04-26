var routeApp=angular.module('routeApp',['ngRoute']);
routeApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    templateUrl:'home.html'
  })
  .when('/about',{
    templateUrl:'about.html'
  })
  .otherwise({
    redirectTo:'/'
  })
}])
