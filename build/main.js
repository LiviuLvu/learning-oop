'use strict';

// Quizz app
// Learning OOP


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
      console.log(this.name + 'Scores: ' + scores);
   },
   changeEmail: function changeEmail(newEmail) {
      this.email = newEmail;
      console.log('New Email Saved:' + this.email);
   }
};

// instances of the User function
firstUser = new User('Liviu', 'liviu@mail.com');
firstUser.changeEmail('liviu@newmail.com');
firstUser.saveScore(20);
firstUser.saveScore(11);
firstUser.showNamesAndScores();

// another user
secondUser = new User('Albert', 'albert@mail.com');
secondUser.saveScore(14);
secondUser.showNamesAndScores();