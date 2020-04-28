var loginApp=angular.module('loginApp',['ngRoute']);

loginApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'login.html'
  })
  .when('/dashboard',{
    resolve:{
      "check":function(){
        if(1==1){
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

loginApp.controller('loginController',['$scope','$location',function($scope,$location){
  $scope.submit=function(){
    if($scope.username=='admin' && $scope.password=="admin"){
      $location.path('/dashboard')
    }else{
      alert('incorrect username and password')
    }
  };
}]);
