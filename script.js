let currentQuestion = 0;
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
};

const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const progressBarContainer = document.getElementById("progress-bar-container");
const progressBar = document.getElementById("progress-bar");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");

    showQuestion();
}

function updateProgressBar() {
    const percent = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${percent}%`;
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    answersContainer.innerHTML = ""; // clear previous answers

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-button");
        button.textContent = answer.text;
        button.addEventListener("click", () => selectAnswer(answer.types));
        answersContainer.appendChild(button);
    });

    updateProgressBar();
}

function selectAnswer(types) {
    if (types && Array.isArray(types)) {
        types.forEach(type => {
            scores[type]++;
        });
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    // Determine MBTI by highest score in each dichotomy
    const result =
        (scores["E"] >= scores["I"] ? "E" : "I") +
        (scores["S"] >= scores["N"] ? "S" : "N") +
        (scores["T"] >= scores["F"] ? "T" : "F") +
        (scores["J"] >= scores["P"] ? "J" : "P");

    window.location.href = `results.html?type=${result}`;
}
