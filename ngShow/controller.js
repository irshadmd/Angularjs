var myApp=angular.module('myApp',[]);

myApp.controller('myController',['$scope',function($scope){
    $scope.show='msg1';
    $scope.toggle=function(){
        $scope.show=$scope.show == 'msg1' ? $scope.show = 'msg2' : 'msg1';
    }
}]);