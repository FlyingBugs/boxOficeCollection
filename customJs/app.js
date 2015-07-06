var app = angular.module('bollywood', [
   'movie-lists'
]);

var textrrr ={};
var tyty = {};
var products = {};

// My first Custom Filter
app.filter('customCurrency', function() { 

  return function(amount, symbol, type) {

    if(isNaN(amount)) {
      return amount;
    } else {

      var symbol = symbol || 'INR. ';
      var type = type === undefined ? 'bollywood' : type;

      if( type === 'bollywood') {
        return symbol + amount;
      } else {
	return amount;
      }

    }
  }

});

app.controller('formController',
   function($http, $scope) {

      this.callApi = function(type, year,
         field, order,
         parentScope, sortReq) {
         //alert('year : ' + year + ' field : ' + field + ' order: ' + order);
         if (typeof year ==
            'undefined' || typeof type == 'undefined' || (type.toLowerCase() !='bollywood' && type.toLowerCase() !='hollywood')) {
            alert('There is some error in Year Or Type  !!');
            return;
         }
//bollywood

if (sortReq == true && (typeof field == 'undefined' || typeof order == 'undefined') ) {
            alert('pls select sort field and order  !!');
            return;
         }
         var urlString =
            'https://udayogra-box-office-report-v1.p.mashape.com/getmovies?&type='+type+'&order=' +
            order + '&sort=' +
            field + '&year=' +
            year;
         var req = {
            method: 'GET',
            url: urlString, //?order=asc&year=2014&type=bollywood&sort=lifetime
            headers: {
               'X-Mashape-Authorization': 'IJG11tA1i5mshQ3NOOQUV43Q8ScZp1TfyqvjsnZlqI4fcLY2jp'
            },
            data: {}
         }
         $http(req).success(
            function(
               responseData) {
               parentScope.a =
                  responseData;
            }).error(function(
            err) {
            console.log(err);
            console.log(
               'Error Exist'
            );
         });

      };

   });
