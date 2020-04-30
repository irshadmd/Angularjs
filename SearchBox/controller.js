var myApp=angular.module('myApp',[]);

myApp.controller('myController',['$scope','$http',function($scope,$http){
  $http.get('http://127.0.0.1:3000/SearchBox/data.json')
  .then(function(response){
    $scope.persons=response.data.records
  });
}]);
