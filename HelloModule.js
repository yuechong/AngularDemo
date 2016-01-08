/*function greetCtr($scope){
	$scope.greet={'say':'Hello','what':'Angular'};
}*/

var app=angular.module("app",[]);

app.controller("greetCtr",['$scope',function($scope){
	$scope.greet={'say':'Hello','what':'say what'};
}]);