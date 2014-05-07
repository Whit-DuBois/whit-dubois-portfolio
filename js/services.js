'use strict';

/* Services */

var myServices = angular.module('myServices', ['ngResource']);

	myServices.factory('instagramAPI', function($resource){
		return{
			//object literal that expose IG data
			fetchRecent: function(callback){
				var api = $resource('https://api.instagram.com/v1/users/27135989/media/recent?client_id=:client_id&callback=JSON_CALLBACK',{
					client_id: '8d74e5411155466792c074b4fb8f97fc'
				},{
					fetch:{method:'JSONP'}
				});

				api.fetch(function(response){
					callback(response.data);
				})
			}
		}
	});