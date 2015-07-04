(function() {
var app = angular.module('movie-lists',[]);

app.directive('movieList', function() {
        return {
            restrict: 'E',
            templateUrl: 'customDirectiveHtml/movie-list.html'
        };
    });

app.directive('inputForm', function() {
        return {
            restrict: 'E',
            templateUrl: 'customDirectiveHtml/input-form.html'
        };
    });

})();
