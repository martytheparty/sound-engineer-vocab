require('angular');

angular.module('vocab', []);

var data = require('../JSON/vocab.json');

angular.module('vocab').controller('MainCtrl', function($scope){
  $scope.description = require('../JSON/vocab.json').description;
});

angular.module('vocab').controller('QaCtrl', function($scope){
  $scope.description = require('../JSON/vocab.json').description;
  $scope.questions = require('../JSON/vocab.json').questions;
});

angular.module('vocab').directive('qa',function(){
  return {
    templateUrl: 'templates/qa.html',
    restrict: 'E',
    scope: {
      description: '@',
      questions: '='
    }
  }
});

angular.element(function() {
  angular.bootstrap(document, ['vocab']);
});
