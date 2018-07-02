//Constructor function with 3  parameters (Question, Options[] and correct answer)
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//choice parameter contains the value for user click option
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}