/*function greetCtr($scope){
	$scope.greet={'say':'Hello','what':'Angular'};
}*/

var app=angular.module("app",[]);

app.directive("myHello",function(){
  return {
    restrict:'E',
	replace:true,
	template:'<div>{{greet.say}}</div>'
  }
});

app.controller("greetCtr",['$scope',function($scope){
	$scope.greet={'say':'Hello','what':'say what'};
}]);