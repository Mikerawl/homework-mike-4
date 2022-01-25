var timerEl = document.getElementById("countdown");
var startQuiz = document.getElementById("start-quiz");
var questionBank = document.getElementById("question-bank");
var questionItem = document.getElementById("question-item");
var answerTrue = document.getElementById("answer-true");
var answerFalse = document.getElementById("answer-false");
var welcome = document.getElementById("welcome");
var questionNumber = 0;
var message = "Game Over";
var answerButton = document.querySelectorAll(".answer-button");
var questions = [
  {
    question: "the main programing language of the internet is Java.",
    show: ["True", "False"],
    answer: "0",
  },
  {
    question: "The currently preffered variables are 'let' and 'var'.",
    show: ["True", "False"],
    answer: "1",
  },
  {
    question:
      "Responsive design allows web pages to be displayed on computer, phones, and tablets correctly.",
    show: ["True", "False"],
    answer: "1",
  },
  {
    question: "It is possible to add content o HTML from the Javascript page.",
    show: ["True", "False"],
    answer: "0",
  },
];
var score = 0;
// When I press the start button I begin the test and start the time

// beginQuiz starts the quiz
function beginQuiz() {
  welcome.style.display = "none";
  questionBank.style.display = "block";
  questionNumber = 0;
  countdown();
  replaceQuestion(questionNumber);
}

function replaceQuestion(id) {
  if (id < questions.length) {
    questionItem.textContent = questions[id].question;
    answerTrue.textContent = questions[id].show[1];
    answerFalse.textContent = questions[id].show[0];
  }
}

function checkAnswer(e) {
  e.preventDefault();

  if (questions[questionNumber].answer === e.target.value) {
    console.log("score");
  }
}

// Timer that counts down from 5
function countdown() {
  var timeLeft = 10;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      alert("Game Over");
    }
  }, 1000);
}

startQuiz.addEventListener("click", beginQuiz);
answerButton.forEach((item) => {
  item.addEventListener("click", checkAnswer);
});

// // GIVEN I am taking a code quiz
// // For Loop to show questions
// for (var question ) < 1 < questionBank, !++

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
