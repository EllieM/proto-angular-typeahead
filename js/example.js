angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('TypeaheadCtrl', function($scope, $http) {

  // user input
  $scope.userInput = '';

  // suggestions api
  $scope.currentSuggestion = [];
  $scope.suggestions = ['USA','UK','BG','BE','GR']

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
    $scope.countriesResult = $scope.countries;
  };

  // countries result api
  $scope.countriesResult = [];
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

});