'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute','angular-loading-bar','myApp.gridfilter', 'rzModule'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/gridfilter'});
}])

.directive('fallbackSrc', function () {
  var fallbackSrc = {
    link: function postLink(scope, iElement, iAttrs) {
      iElement.bind('error', function() {
        angular.element(this).attr("src", iAttrs.fallbackSrc);
      });
    }
   }
   return fallbackSrc;
});