'use strict';

angular.module('myApp.gridfilter', ['ngRoute', 'angular-loading-bar'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gridfilter', {
    templateUrl: 'gridfilter/gridfilter.html',
    controller: 'GridFilterCtrl'
   });
}])

.controller('GridFilterCtrl', ["$scope","$http", function($scope, $http){
	$scope.MAX_POP = 1340000000;
	$scope.minPop = 0;
	$scope.maxPop = $scope.MAX_POP;

	$scope.MAX_AREA = 17200000;
	$scope.minArea = 0;
	$scope.maxArea = $scope.MAX_AREA;

 	$scope.labels = ["#",
    	"Code",
    	"Country",
    	"Population",
    	"Area (sq km)"];

	$scope.slider1 = {
	  min: 0,
	  max: $scope.MAX_POP,
	  options: {
		floor: 0,
		ceil: $scope.MAX_POP
	  }
	};

	$scope.slider2 = {
	  min: 0,
	  max: $scope.MAX_AREA,
	  options: {
		floor: 0,
		ceil: $scope.MAX_AREA
	  }
	};

	//load countries data
	$http.get('countries.json').success(function(response){
		$scope.countries = response;
	});

	$scope.byRange = function (fieldName, minValue, maxValue) {
	  if (minValue === undefined) minValue = 0;
	  if (maxValue === undefined) maxValue = $scope.MAX_POP;

	  return function predicateFunc(item) {
		return minValue <= item[fieldName] && item[fieldName] <= maxValue;
	  };
	};
}]);