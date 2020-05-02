var factoryApp=angular.module('factoryApp',[]);

factoryApp.factory('random',function(){
  var generateRandom={};
  var rand=Math.floor(Math.random()*10);
  generateRandom.evaluate=function(){
    return rand
  }
  return generateRandom
});

factoryApp.controller('factoryController',['$scope','random',function($scope,random){
  $scope.generateRand=function(){
    $scope.randomNum=random.evaluate()
  }
}]);
