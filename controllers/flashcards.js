export function ctrl ($scope){

  function setQuestion() {
    $scope.question = $scope.questions[$scope.currentIndex];
  }

  $scope.currentIndex = 0;
  $scope.lastIndex = $scope.questions.length - 1;
  $scope.question = $scope.questions[0];
  $scope.open = false;
  $scope.question = {};
  $scope.toggle = function(){
    $scope.open = !$scope.open;
    $scope.currentIndex = 0;
    setQuestion();
  }
  $scope.next = function(){
    $scope.currentIndex++;
    if ($scope.currentIndex > $scope.lastIndex) $scope.currentIndex = 0;
    setQuestion();
  }
  $scope.previous = function(){
    $scope.currentIndex--;
    if ($scope.currentIndex < 0) $scope.currentIndex = $scope.lastIndex;
    setQuestion();
  }
}
