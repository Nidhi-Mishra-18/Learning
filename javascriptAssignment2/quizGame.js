// JavaScript file for quiz game
let score = 0;
let quesNumber = 0;
let question = [];

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start').addEventListener('click', function() {
        alert("Instructions: \n1.Questions according to level selection \n 10 for Small, 15 for Medium, 20 for Hard.\n2. Time limit for each question is 15 seconds.\n3. For each correct answer 1 point is rewarded.\n4. Your score will be displayed after the quiz wll over.");
        fetchData();
    });
});

function fetchData() {
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('level').value;

    if (category === "Please select the category" || difficulty === "Please select the value") {
        alert("⚠️ Please select both the category and difficulty level ⚠️");
    } else {
        fetchQuestions(category, difficulty);
    }
}

const categoriesId = {
    "Celebrities": 26,
    "Entertainment": 12,
    "General Knowledge": 9,
    "History": 23,
    "Mythology": 20,
    "Sports": 21
};

const quesLevels = {
    "Easy": 10,
    "Medium": 15,
    "Hard": 20
};

function fetchQuestions(category, level) {
    const id = categoriesId[category];
    const amount = quesLevels[level];

    // Corrected the API URL by using template literals
    const apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${id}&difficulty=${level.toLowerCase()}&type=multiple`;

    //document.getElementById('box').innerHTML = '<h1>Loading questions...</h1>';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                question = data.results;
                score = 0;
                quesNumber = 0;
                sessionStorage.setItem('quizQuestions', JSON.stringify(question)); 
                window.location.href = "question.html"; 
            } else {
                alert("No questions found.");
                document.getElementById('result').innerHTML = '<h1>No questions found. Try again!</h1>';
            }
        })
        .catch(error => {
            console.error("Error fetching quiz questions: ", error);
        });
}

/*
function showQuestion() {
    if (quesNumber < question.length) {
        const currentQuestion = question[quesNumber];
        const questionText = currentQuestion.question;
        const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        
        shuffleArray(options); 

        const questionHTML = `
            <h2>${questionText}</h2>
            <ul id="options">
                ${options.map((option, index) => `
                    <li onclick="checkAnswer('${option}', '${currentQuestion.correct_answer}')">${option}</li>
                `).join('')}
            </ul>
        `;

        document.getElementById('result').innerHTML = questionHTML;
    } else {
        document.getElementById('result').innerHTML = `<h2>Quiz Over! Your score: ${score}</h2>`;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    quesNumber++;
    showQuestion();
}
*/