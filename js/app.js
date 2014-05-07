'use strict';

var myApp = angular.module('myApp', [
	'myAppControllers',
	'ngResource',
	'myServices',
	'myDirectives'
]);

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/home.html', 
				controller: 'homeCtrl' 
			}).
			when('/projects', {
				templateUrl: 'partials/projects.html',
				controller: 'projectCtrl'
			}).
			when('/projects/:projectId', {
				templateUrl: 'partials/project-detail.html',
				controller: 'projectDetailCtrl'
			}).
			when('/contact', {
				templateUrl: 'partials/contact-me.html',
				controller: 'contactCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);