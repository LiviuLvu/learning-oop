// Learning OOP

function inheritPrototype(childObject, parentObject) {
   var copyOfParent = Object.create(parentObject.prototype);
   copyOfParent.constructor = childObject;
   childObject.prototype = copyOfParent;
}

// constructor function
function User(theName, theEmail) {
   this.name = theName;
   this.email = theEmail;
   this.quizScores = [];
   this.currentScore = 0;
}

User.prototype = {
   // disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, so we have to set it manually. Hence this line:
   constructor: User,
   saveScore: function saveScore(theScoreToAdd) {
      this.quizScores.push(theScoreToAdd);
   },
   showNamesAndScores: function showNamesAndScores() {
      var scores = this.quizScores.length > 0 ? this.quizScores.join(',') : 'No Scores Yet';
      return this.name + 'Scores: ' + scores;
   },
   changeEmail: function changeEmail(newEmail) {
      this.email = newEmail;
      return 'New Email Saved:' + this.email;
   }

   // instances of the User function
};
firstUser = new User('Liviu', 'liviu@mail.com');
firstUser.changeEmail('liviu@newmail.com');
firstUser.saveScore(20);
firstUser.saveScore(11);
firstUser.showNamesAndScores();

// another user
secondUser = new User('Albert', 'albert@mail.com');
secondUser.saveScore(14);
secondUser.showNamesAndScores();


// question constructor
function Question(theQuestion, theChoices, theCorrectAnswer) {
   // initialize instance properties
   this.question = theQuestion;
   this.choices = theChoices;
   this.correctAnswer = theCorrectAnswer;
   this.userAnswer = '';

   // private properties - cannot be changed by instances
   var newDate = new Date(),
      // constant variable
      QUIZ_CREATED_DATE = newDate.toLocaleDateString();
   // the constant can be accesed as follows
   // example of privileged method: can access private properties and can be called publicly
   this.getQuizDate = function() {
      return QUIZ_CREATED_DATE;
   };
   // confirmation for created quiz
   console.log('Quiz Created On:' + this.getQuizDate());
}

// add prototype methods to the question obj
// all instances of question object will inherit these methods
Question.prototype.getCorrectAnswer = function() {
   console.log(this.correctAnswer);
   return this.correctAnswer;
};
Question.prototype.getUserAnswer = function() {
   return this.userAnswer;
};
Question.prototype.displayQuestion = function() {
   var questionToDisplay = '<div class="question">' + this.question + '</div><ul>';
   choiceCounter = 0;
   this.choices.forEach(function(eachChoice) {
      questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachCoice + '</li>';
      choiceCounter++;
   });
   questionToDisplay += '</ul>';
   console.log(questionToDisplay);
};

// multiple choice question
function MultipleChoiceQuestion(theQuestion, theCoices, theCorrectAnswer) {
   // passing MultipleChoiceQuestion as the This object
   Question(this, theQuestion, theChoices, theCorrectAnswer);
}
// inherit methods and properties from Question
inheritPrototype(MultipleChoiceQuestion, Question);



// // example of inheritance pattern
// var cars = {
//    type: 'sedan',
//    wheels:4
// };

// var toyota = Object.create(cars);
// console.log(toyota.type);

// // another example of inheritance pattern
// function inheritPrototype(childObject, parentObject) {
//    // inherit everything from the parentObject
//    var copyOfParent = Object.create(parentObject.prototype);
//    // manually set the copyOfParent constructor here
//    // point constructor of the new object to the childObject;
//    copyOfParent.constructor = childObject;
//    // set childObject protype to copyOfParent
//    childObject.prototype = copyOfParent;
// }
