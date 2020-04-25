var myNinjaApp=angular.module('myNinjaApp',[]);
// myNinjaApp.config(function(){
//
// });
// myNinjaApp.run(function(){
//
// });
myNinjaApp.controller('ninjaController',function($scope){
  $scope.message="Hello ninjas";
  $scope.ninjas=['joy','chandler','rachael'];
});
