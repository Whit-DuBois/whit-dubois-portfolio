'use strict';

/* Directives */
var myDirective = angular.module('superhero', []);

myDirective.directive('superman', function(){
    return{
        restrict: 'E',
        template: '<div>Here I am to save the day</div>'
    }
});

// var myAp = angular.module('myAp', []);

// myAp.directive('myWidget', function() {
//     return {
//         restrict: 'E',
//         link:   function(scope, element, attrs) {
//                     var animateDown, animateRight, pageOne, pageTwo;
//                     pageOne = angular.element(element.children()[0]);
//                     pageTwo = angular.element(element.children()[1]);

//                     animateDown = function() {
//                         $(this).animate({
//                             top: '+=50'
//                         });
//                     };

//                     animateRight = function() {
//                         $(this).animate({
//                             left: '+=50'
//                         });
//                     };

//                     $(pageOne).on('click', animateDown);
//                     $(pageTwo).on('click', animateRight);
//                 };
//             };
// });

