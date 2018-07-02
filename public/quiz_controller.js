/*
* This controller will be containing questions for the QUIZ and scores for it
*/

//Constructor function
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//1. function to get index of current question
//2. funtion to check whether our quiz has ended or not
//3. function to check whether the current answer selected by user is correct or not

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    
    this.questionIndex++; //We need to increament index irrespection of right or wrong answer to navigate to next question.
}

