// declaration of variables
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const instruct = document.querySelector(".instruct");
const finishButton = document.getElementById("finish-btn");
const quiz = document.getElementById("quiz");
const questionSection = document.getElementById("question-holder");
const questionLine = document.getElementById("question");
const answerColumn = document.getElementById("answer");
const scoring = document.getElementById("score");

let shuffledQuestion, currentQuestionIndex;
let score = 0;

// eventlisteners for when an event occurs
startButton.addEventListener("click", startGame);
finishButton.addEventListener("click", endGame);
nextButton.addEventListener("click", () => {currentQuestionIndex++
    setNextQuestion()
});

// questions array
const questions = [
    {
        question: "Who formed the first political party in Nigeria?",
        answers: [
            {text: "Donald Kuti", correct: false},
            {text: "Yemi Osinbajo", correct: false},
            {text: "Funmilayo Ransome", correct: false},
            {text: "Herbert Macaulay", correct: true}
        ]
    },
    {
        question: "What years did the Nigerian Golden eaglets win the FIFA under-17 world cup?",
        answers: [
            {text: "1985, 2007, 2013", correct: true},
            {text: "1993, 2007, 1996", correct: false},
            {text: "2000, 2007, 1976", correct: false},
            {text: "1985, 2013, 2015", correct: false}
        ]
    },
    {
        question: "Charles Dickens is the Author of an amazing gistorical novel called?",
        answers: [
            {text: "The Scarlet Letter", correct: false},
            {text: "The Great Gatsby", correct: false},
            {text: "A Tale of Two Cites", correct: true},
            {text: "Dracula", correct: false}
        ]
    },
    {
        question: "Which of these is true about Escherichia coli?",
        answers: [
            {text: "It is a Gram-negative bacteria", correct: true},
            {text: "It is a virus", correct: false },
            {text: "it is round-shaped", correct: false},
            {text: "It has a cell wall", correct: false}
        ]
    },
    {
        question: "There are 2 Primary Hormones of the female reproductive system namely:",
        answers: [
            {text: "Vasopressin and  Estradiol", correct: false},
            {text: "Estrogen and Progesterone", correct: true},
            {text: " Luteinizing hormone and Follicle-stimulating hormone ", correct: false},
            {text: "Insulin and Epinephrine", correct: false}
        ]
    }
]

// when start button is clicked
function startGame () {
    quiz.classList.add("hide");
    startButton.classList.add("hide");
    finishButton.classList.add("hide");
    questionSection.classList.remove("hide");
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    scoring.innerText = "Score: " + score;
    setNextQuestion();
}

// selecting next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

// the actual option buttons are created here.
// the previous buttons are then removed in the next function.
// the correct option is color coded green when option clicked.

function showQuestion(question) {
    questionLine.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        } 
        button.addEventListener("click", selectAnswer);
        answerColumn.appendChild(button);
    });
}

// removing next button and previous children button of the answer div
function resetState() {
    nextButton.classList.add("hide");
    while (answerColumn.firstChild){
        answerColumn.removeChild(answerColumn.firstChild);
    }
}

// when answer button clicked, and next button clicked there is a loop until the end of the 5 questions before the game then finishes, it does not start all over again.
function selectAnswer(element) {
    let selectedButton = element.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerColumn.children).forEach(button => { 
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
        instruct.classList.add("hide");
        
    } else {
        finishButton.classList.remove("hide");
    }
    
    // if button clicked is the correct option, score is increased by 1.
    // if not it remains unchanged from 0.

    if (selectedButton = correct) {
        scoring.innerText = score += 1;
        scoring.innerText = "Score: " + score + "/" + questions.length;
    } else {
        scoring.innerText = "Score: " + score + "/" + questions.length; 
    }     
}

// when options click, the correct one displays green and wrong displays red.
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

// when next is clicked, the color coding is removed until option clicked again
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

// when the finish button is clicked, this function calls the end display of the game, where the total score is displayed.
function endGame() {
    finishButton.classList.add("hide");
    questionSection.classList.add("hide");
    scoring.classList.add("hide");

    const totalScore = document.createElement("p");
    let end = "TOTAL";
    totalScore.innerText = end;
    totalScore.classList.add("question1");
    quiz.appendChild(totalScore);
    quiz.removeChild(quiz.firstChild);
    quiz.classList.remove("hide");
    
    const endScore = document.createElement("p");
    endScore.innerText = "You scored" + " " + score + " " + "out of" + " " + questions.length + " " + "correctly.";
    endScore.classList.add("question");
    quiz.appendChild(endScore);

    // an end of game goodbye.
    
    if (score >= 3) {
        const endMsg = document.createElement("p");
        endMsg.innerText = "Congrats!!";
        endMsg.classList.add("question");
        quiz.appendChild(endMsg);
    } else {
        const endMsg = document.createElement("p");
        endMsg.innerText = "Try harder next time.";
        endMsg.classList.add("question");
        quiz.appendChild(endMsg);
    }

}

