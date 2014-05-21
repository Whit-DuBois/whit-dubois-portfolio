'use strict';

/* Directives */
var myDirective = angular.module('myDirectives', []);

myDirective.directive('superman', function () {
    return {
        restrict: 'E',
        template: '<div>Here I am to save the day</div>'
    }
});

myDirective.directive('whit', function () {
    return {
        restrict: 'E',
        template: 'Whit DuBois'
    }
});

// var myAp = angular.module('myAp', []);

myDirective.directive('showCaption', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            $('#photos p').hide();

            $('#photos a').mouseenter(function () {
                $(this).parent().find('.show-caption').show('fast');
            });

            $('#photos a').mouseleave(function () {
                $(this).parent().find('.show-caption').hide('fast');
            });

            function fixDiv() {
                var $div = $("#stickTop");
                if ($(window).scrollTop() > $div.data("top")) { 
                    $('#stickTop').css({'position': 'fixed', 'top': '0'});
                    $('#stickTop h2').addClass('stick'); 
                }
                else {
                    $('#stickTop').css({'position': 'absolute', 'top': 'auto'});
                }
            }

            $("#stickTop").data("top", $("#stickTop").offset().top); // set original position on load
            $(window).scroll(fixDiv);
        }
    };
});

// myDirective.directive('scrollTop', function(){
//     return {
//         restrict: 'C'.
//         link: function (scope, element)
//     }
// })