let score = 0;//initialize the score56
let quesNumber = 0;
let question = [];
let timerInterval;
let timePerQuestion = 15;//time limit for each question sets to 15 sec

//Fetch data from session storage
document.addEventListener('DOMContentLoaded', function () {
    const questionsFromStorage = sessionStorage.getItem('quizQuestions');
    if (questionsFromStorage) {
        question = JSON.parse(questionsFromStorage);
        showQuestion();  //showQuestion fuction is call to show the questions
    } else {
        document.getElementById('result').innerHTML = '<h1>Failed to load questions.</h1>';
    }
});

function showQuestion() {
    if (quesNumber < question.length) {
        const currentQuestion = question[quesNumber];
        const questionText = currentQuestion.question;
        const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];

        shuffleArray(options);
        document.getElementById('ques').innerHTML = `${quesNumber + 1} out of ${question.length} questions`;

        const questionHTML = `
        <h2>${questionText}</h2>
        <div id="options">
            <button onclick="checkAnswer('${options[0]}', '${currentQuestion.correct_answer}', this)">A. ${options[0]}</button>
            <button onclick="checkAnswer('${options[1]}', '${currentQuestion.correct_answer}', this)">B. ${options[1]}</button>
            <button onclick="checkAnswer('${options[2]}', '${currentQuestion.correct_answer}', this)">C. ${options[2]}</button>
            <button onclick="checkAnswer('${options[3]}', '${currentQuestion.correct_answer}', this)">D. ${options[3]}</button>
        </div>
        `;

        document.getElementById('result').innerHTML = questionHTML;
        startTimer();  
    } else {
        document.getElementById('timeLeft').style.display="none";
        document.getElementById('ques').innerHTML=``;
        document.getElementById('result').innerHTML =` 
        <p>SCORE: ${score}</p>
        <button id="restart" onclick="window.location.href='quizGame.html'">🔁RESTART🔁</button>
        `;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    let timeLeft = timePerQuestion;
    document.getElementById('timeLeft').textContent = `🕣 ${timeLeft} sec`;

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').textContent =`🕣 ${timeLeft} sec`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            disableOptions();  
            highlightCorrectAnswer(); 
            quesNumber++; 
            setTimeout(() => {
                showQuestion();  
            }, 1000); 
        }
    }, 1000);
}

function checkAnswer(selectedAnswer, correctAnswer, optionButton) {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        button.disabled = true; 
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        optionButton.style.backgroundColor = "palegreen"; 
        optionButton.innerHTML = `${optionButton.innerHTML} <span class="checkmark">✔️</span>`; 
    } else {
        optionButton.style.backgroundColor = "lightcoral"; 
        optionButton.innerHTML = `${optionButton.innerHTML} <span class="checkmark">❌</span>`; 
    }

    const allButtons = document.querySelectorAll('#options button');
    allButtons.forEach(button => {
        if (button.textContent.includes(correctAnswer) && button !== optionButton) {
            button.style.backgroundColor = "palegreen"; 
            button.innerHTML = `${button.innerHTML} <span class="checkmark">✔️</span>`; 
        }
    });

    setTimeout(() => {
        quesNumber++;
        showQuestion();  
    }, 1000); 
}

function disableOptions() {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        button.disabled = true; 
    });
}

function highlightCorrectAnswer() {
    const currentQuestion = question[quesNumber];
    const correctAnswer = currentQuestion.correct_answer;
    const allButtons = document.querySelectorAll('#options button');
    
    allButtons.forEach(button => {
        if (button.textContent.includes(correctAnswer)) {
            button.style.backgroundColor = "palegreen";
            button.innerHTML = `${button.innerHTML} <span class="checkmark">✔️</span>`; 
        }
    });
}
