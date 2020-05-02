var serviceApp=angular.module('serviceApp',[]);

serviceApp.service('random',function(){
  var rand=Math.floor(Math.random()*10);
  this.evalute=function(){
    return rand
  }
});

serviceApp.controller('appController',['$scope','random',function($scope,random){
    $scope.randomFun=function(){
      $scope.randomNum=random.evalute()
    }
}])
