var app=angular.module("app",[]);

app.controller("greetCtr",['$scope','$rootScope',function($scope,$rootScope){
    $scope.name="angular";
	$rootScope.depatement="Angular";
}]);

app.controller("listCtr",['$scope',function($scope){
	$scope.lists=['A','D','c','s'];
}]);