var app=angular.module("app",[]);

app.controller("CommonCtr",['$scope','$window',function($scope,$window){
     $scope.com=function(){
	    $window.alert(" common");
	 };
}]);

app.controller("Ctr1",['$scope','$window',function($scope,$window){
	 $scope.greet={
		 'text':'Angular'
     };
     $scope.test1=function(){
	    $window.alert("Test1");
	 };
}]);

app.controller("Ctr2",['$scope','$window',function($scope,$window){
	$scope.greet={
		'text':'angular2'
	};
    $scope.test2=function(){
	    $window.alert("Test2");
    };
}]);