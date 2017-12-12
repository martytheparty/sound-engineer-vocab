export function ctrl ($scope){

  function setQuestion() {
    var position = Math.floor((Math.random() * 3));
    var position1 = Math.floor((Math.random() * $scope.questions.length));
    var position2 = Math.floor((Math.random() * $scope.questions.length));
    var position3 = Math.floor((Math.random() * $scope.questions.length));


    $scope.question = $scope.questions[$scope.currentIndex];
    $scope.question1 = $scope.questions[position1];
    $scope.question2 = $scope.questions[position2];
    $scope.question3 = $scope.questions[position3];

    $scope.class1 = '';
    $scope.class2 = '';
    $scope.class3 = '';


    if (position === 0) {
      $scope.question1 = $scope.questions[$scope.currentIndex];
    } else if(position === 1) {
      $scope.question2 = $scope.questions[$scope.currentIndex];
    } else if(position === 2) {
      $scope.question3 = $scope.questions[$scope.currentIndex];
    }

    $scope.choices.push($scope.question1);
    $scope.choices.push($scope.question2);
    $scope.choices.push($scope.question3);
    /* add the choices here */
  }

  $scope.choices = [];
  $scope.currentIndex = 0;
  $scope.lastIndex = $scope.questions.length - 1;
  $scope.question = $scope.questions[0];
  $scope.open = false;
  $scope.questionOpen = false;
  $scope.question = {};
  $scope.threechoice = '';

  $scope.radioClick = function(choiceNumber) {
    $scope.threechoice = choiceNumber;
    $scope.class1 = '';
    $scope.class2 = '';
    $scope.class3 = '';
    if (choiceNumber === 1) {
      $scope.class1 = 'highlight';
    } else if (choiceNumber === 2) {
      $scope.class2 = 'highlight';
    } else if (choiceNumber === 3) {
      $scope.class3 = 'highlight';
    }
    console.log('choice: ', $scope.choices[choiceNumber-1].answer);
    console.log('current: ', $scope.question.answer);
    var isCorrect = false;
    var isClass = ' incorrect';
    if ($scope.question.answer == $scope.choices[choiceNumber-1].answer) {
      isCorrect = true;
      isClass = ' correct';
    }

    if (choiceNumber === 1) {
      $scope.class1 += isClass;
    } else if (choiceNumber === 2) {
      $scope.class2 += isClass;
    } else if (choiceNumber === 3) {
      $scope.class3 += isClass;
    }

    /* update the ui based on isCorrect */



  }
  $scope.toggle = function(){
    $scope.open = !$scope.open;
    $scope.currentIndex = 0;
    setQuestion();
  }
  $scope.next = function(){
    $scope.threechoice = null;
    $scope.choices = [];
    $scope.currentIndex++;
    if ($scope.currentIndex > $scope.lastIndex) $scope.currentIndex = 0;
    setQuestion();
    $scope.questionOpen = false;
  }
  $scope.previous = function(){
    $scope.choices = [];
    $scope.currentIndex--;
    if ($scope.currentIndex < 0) $scope.currentIndex = $scope.lastIndex;
    setQuestion();
    $scope.questionOpen = false;
  }
  $scope.showAnswer = function(){
    $scope.questionOpen = true;
  }
}
