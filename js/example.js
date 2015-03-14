angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {

  // user input
  $scope.userInput = '';

  // suggestions api
  $scope.currentSuggestion = [];

  // $scope.suggestions = ['USA','UK','BG','BE','GR']
  $scope.getSuggestions = function(val) {
    return $http.get('http://23.30.242.21:82/SearchApi/GetHints/', {
      params: {
        q: val,
        searchAdapter: 'FileAdapter'
      }
    }).then(function(response){
        // console.log(response.data);
        return response.data;
    });
  };


  // user has selected on typeahead
  $scope.onSelect = function($item) {
    $scope.search();
  };

  // user has hit enter
  $scope.formSubmit = function() {
    $scope.search();
  };
 
  // search
  $scope.search = function($item) {
    $scope.userInput  = document.getElementById("txt_search").value;
    $scope.countriesResult = $scope.getFiles($scope.userInput);
  };

  // countries result api
  // $scope.countriesResult = [];
  /*
  $scope.countries = [
    {
      Symbol: 'USA',
      Name: 'United States'
    }, 
    {
      Symbol: 'UK', 
      Name: 'United Kingdom'
    },
    {
      Symbol: 'BG',
      Name: 'Bulgaria'
    },
    {
      Symbol: 'BE',
      Name: 'Belgium'
    },    
    {
      Symbol: 'GR',
      Name: 'Greece'
    }
  ];
  */

  // http://www.nodewiz.biz/angular-js-final-callback-after-ng-repeat/
  $scope.getFiles = function(val) {
    return $http.get('http://23.30.242.21:82/SearchApi/GetResults/', {
      params: {
        q: val,
        filter: '',
        searchAdapter: 'FileAdapter',
        searchAttr: true,
        searchContent: true,
        skip: 0
      }
    }).then(function(response){
        // console.log(response.data.data.items);
        return response.data.data.items;
    });
  };

});