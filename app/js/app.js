'use strict';

var myApp = angular.module('myApp', [
	'myAppControllers',
	'superhero'
]);

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/home.html', 
				controller: 'projectCtrl' 
			}).
			when('/projects', {
				templateUrl: 'partials/projects.html',
				controller: ''
			}).
			when('/projects/:projectId', {
				templateUrl: 'partials/project-detail.html',
				controller: 'projectDetailCtrl'
			}).
			when('/contact', {
				templateUrl: 'partials/contact-me.html',
				controller: ''
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);