// 'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

	myAppControllers.controller('projectCtrl', ['$scope', '$http',
		function($scope, $http){
		$http.get('js/projects.json').success(function(data){
			$scope.projects = data;
		});
		console.log('projectCtrl');
	}]);

// myAppControllers = angular.module('projectDetailCtrl', ['$scope', '$routeParams', '$http',
// 		function projectDetailCtrl($scope, $routeParams, $http) {
// 			$http.get('projects/' + $routeParams.projectId + '.json').success(function(data){
// 				$scope.project = data;
// 			});
// }]);

function projectDetailCtrl($scope, $routeParams, $http) {
	$http.get('js/projects/' + $routeParams.projectId + '.json').success(function(data){
		$scope.project = data;
	});
	
	// $http.get('js/projects.json').success(function(data){
	// 	$scope.project = data;
	// });
};

// myAppControllers.controller('scrollnav', [])
// 	.directive('scroll', function(){
// 	return {
// 		scope: {
			
// 		},
// 		template: '<div>Working</div>'
// 	};
// });



