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

//Directive for addtion button.
app.directive('incrementValue', function() {
	return {
		restrict: 'E',
		templateUrl: 'customDirectiveHtml/increment-value.html', 
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			element.on("click", function() {
				var defaultnumber;
				if (isNaN(parseInt(ngModel.$viewValue))) {
					defaultnumber = 1999;
				} else {
					defaultnumber = parseInt(ngModel.$viewValue);
				}
				var setValue = parseInt(defaultnumber) + 1;
				ngModel.$setViewValue(setValue);
				scope.$apply();
			})
		}
	}

});


})();
