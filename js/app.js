require('angular');

angular.module('vocab', []);

var data = require('../JSON/vocab.json');

angular.module('vocab').controller('MainCtrl', function($scope){
  $scope.description = require('../JSON/vocab.json').description;
});

angular.module('vocab').controller('QaCtrl', function($scope){
  $scope.description = require('../JSON/vocab.json').description;
  $scope.questions = require('../JSON/vocab.json').questions;
  $scope.open = false;
  $scope.toggle = function() {
    $scope.open = !$scope.open;
  }
});

angular.module('vocab').directive('qTitle',function(){
  return {
    templateUrl: 'templates/title.html',
    restrict: 'E',
    scope: {
      description: '@'
    }
  }
});

angular.module('vocab').directive('qaQuestions',function(){
  return {
    templateUrl: 'templates/qa-questions.html',
    restrict: 'E',
    scope: {
      description: '@',
      questions: '='
    },
    controller: function($scope){
      $scope.open = false;
      $scope.toggle = function(){
        $scope.open = !$scope.open;
      }
    }
  }
});

angular.module('vocab').directive('qaFlashcards',function(){
  return {
    template: require('raw-loader!../templates/qa-flashcards.html'),
    restrict: 'E',
    scope: {
      description: '@',
      questions: '='
    },
    controller: require('../controllers/flashcards.js').ctrl
  }
});

angular.element(function() {
  angular.bootstrap(document, ['vocab']);
});
