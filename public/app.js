function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
} 

function showScores() {
    var gameOverHtml = "<h1>Results</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: " + quiz.score + "</h2>" + "<button onclick=window.location.href='.' type='button' class='btn btn-primary btn-lg restart-btn'>Restart</button>";
   
    var element= document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}


var questions = [];
 data["results"].forEach(function(quiz){
   var ans = [quiz["correct_answer"], quiz["incorrect_answers"][0], quiz["incorrect_answers"][1], quiz["incorrect_answers"][2]];
   questions.push(new Question(quiz["question"], shuffle(ans), quiz["correct_answer"]))
    
});

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}




//Object for quiz controller
var quiz = new Quiz(questions);

//funtion to populate questions in Quiz
populate();