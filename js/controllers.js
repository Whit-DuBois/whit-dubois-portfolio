'use strict';
/* Controllers */
var myAppControllers = angular.module('myAppControllers', ['myServices']);

myAppControllers.controller('homeCtrl', ['$scope', 'instagramAPI',
    function ($scope, instagram) {
        $scope.pics = []; //empty pics array
        instagram.fetchRecent(function (data) {
            $scope.pics = data;
        });
    }
]);

// Pulls in JSON data for projects.html
myAppControllers.controller('projectCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('js/projects.json').success(function (data) {
            $scope.projects = data;
        });
        console.log('projectCtrl');
    }
]);

myAppControllers.controller('projectDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('js/projects/' + $routeParams.projectId + '.json').success(function (data) {
            $scope.project = data;
        });
        console.log('projectDetailCtrl');
    }
]);

myAppControllers.controller('contactCtrl', ['$scope', '$http',
    function ($scope, $http, $compile) {
        // RESET
        $scope.reset = function () {
            $scope.user = "";
            // $scope.form.$setPristine();
            console.log('onClick');
        }

        // VALIDATION
        $scope.processForm = function() {
            $scope.submitted = false;
            if ($scope.contact.$valid) {
                $http({
                    method: 'POST',
                    url: 'send-mail.php',
                    data: $.param($scope.user),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .success(function () {
                        $scope.user = {};
                        console.log('Form Sent');
                        alert('Message Sent');
                    })
            } else {
                $scope.contact.submitted = true;
            }
        }

        // Empty object to hold input info
        $scope.user = {};
    }
]);



