var loginApp=angular.module('loginApp',['ngRoute']);

loginApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'login.html'
  })
  .when('/dashboard',{
    resolve:{
      "check":function($location,$rootScope){
        if(!$rootScope.logggedIn){
          $location.path('/')
        }
      }
    },
    templateUrl:'dashboard.html'
  })
  .otherwise({
    redirectTo:'/'
  });
}]);

loginApp.controller('loginController',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
  $scope.submit=function(){
    if($scope.username=='admin' && $scope.password=="admin"){
      $rootScope.logggedIn=true;
      $location.path('/dashboard')
    }else{
      alert('incorrect username and password')
    }
  };
}]);
