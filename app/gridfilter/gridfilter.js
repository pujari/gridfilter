'use strict';

angular.module('myApp.gridfilter', ['ngRoute', 'angular-loading-bar'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gridfilter', {
    templateUrl: 'gridfilter/gridfilter.html',
    controller: 'GridFilterCtrl'
   });
}])

.controller('GridFilterCtrl', ["$scope","$http", function($scope, $http){
	//load countries data
	$scope.view = 'flag';
	$http.get('countries.json').success(function(response){
		$scope.countries = response;

		//population min, max values
		$scope.minPop = Math.min.apply(Math,$scope.countries.map(function(item){return item.population;}));
		$scope.maxPop = Math.max.apply(Math,$scope.countries.map(function(item){return item.population;}));
		$scope.MIN_POP = $scope.minPop;
		$scope.MAX_POP = $scope.maxPop;

		//area min, max values
		$scope.minArea = Math.min.apply(Math,$scope.countries.map(function(item){return item.areaInSqKm;}));
		$scope.maxArea = Math.max.apply(Math,$scope.countries.map(function(item){return item.areaInSqKm;}));
		$scope.MIN_AREA = $scope.minArea;
		$scope.MAX_AREA = $scope.maxArea;

		$scope.labels = ["#",
			"Code",
			"Country",
			"Population",
			"Area (sq km)",
			"Flag"];

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

		$scope.byRange = function (fieldName, minValue, maxValue) {
		  if (minValue === undefined) minValue = 0;
		  if (maxValue === undefined) maxValue = $scope.MAX_POP;

		  return function predicateFunc(item) {
			return minValue <= item[fieldName] && item[fieldName] <= maxValue;
		  };
		};
	});
}]);