'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute','angular-loading-bar','myApp.gridfilter', 'rzModule'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/gridfilter'});
}]);