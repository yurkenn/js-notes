function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Qestion Prototype
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}

//Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionsIndex = 0;
}

//Quiz Prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionsIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionsIndex;
}

//Quiz guess
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionsIndex++;
}

var q1 = new Question("What's the best programin language ? ", ["C#", "javascript", "phyton", "asp.net"], "javascript")

var q2 = new Question("What's the best programin language ? ", ["C#", "javascript", "node.js", "PHP"], "javascript")

var q3 = new Question("What's the best programin language ? ", ["C#", "javascript", "phyton", "asp.net"], "javascript")

var questions = [q1, q2, q3];

// Start Quiz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if (quiz.isFinish()){
        // quiz bittiginde kullaniciya aldigi score gosterilir showScore();
        showScore();
    }else{ // quiz bitmedi ise 
        var question = quiz.getQuestion(); // getQustion() ile siradaki soruyu aliriz 
        var choices = question.choices; // aldigimiz soru(question) uzerinden şıkları(choices) cagiririz
        
        document.querySelector('#question').textContent = question.text // aldigimiz sorunun textini ekrana question.text ile yazdiririz.  

        for (var i =0; i<choices.length; i++){ // for dongusu ile şıklar üzerinden tek tek geçeriz
            var element = document.querySelector('#choice'+i); // bir değişken tanımlayıp aldığımız şıkları span üzerine yazdırırız choice0 choice1 degerlerını tek tek yazmak yerıne choice[i] ile index numarasıdan alabiliriz
            element.innerHTML = choices[i]; // aldigmiz idnin(#choice) uzerine .innerHTML ile şıkları yazdırıyoruz.
            // elimizde 4 tane şık var dolayısı ile her biri için click event oluşturmamız gerekiyor
            guess("btn"+i, choices[i]);
        }

        showProgress()
    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }

}

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionsIndex+1;
    document.querySelector('#progress').innerHTML= "Question "+ questionNumber+' of '+totalQuestion;
}