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
const progress = document.getElementById("progress");
const progressBarContainer = document.getElementById("progress-bar-container");
const progressBar = document.getElementById("progress-bar");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    progressBarContainer.classList.remove("hidden");

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

    if (q.answers.length > 0) {
        // Multiple choice logic
        q.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.classList.add("answer-button");
            button.textContent = answer.text;
            button.addEventListener("click", () => selectAnswer(answer.types));
            answersContainer.appendChild(button);
        });
    } else {
        // Short answer input logic
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Type your answer...";
        input.classList.add("short-answer");

        const submit = document.createElement("button");
        submit.textContent = "Submit";
        submit.addEventListener("click", () => {
            // You can choose to analyze or ignore this input
            selectAnswer([]); // No types added for short answers
        });

        answersContainer.appendChild(input);
        answersContainer.appendChild(submit);
    }

    updateProgressBar();
}

function selectAnswer(types) {
    types.forEach(type => {
        scores[type]++;
    });

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


function retry() {
    document.getElementById("progress-bar-container").classList.add("hidden");
    window.location.href = 'index.html';
}

function downloadImage() {
    const img = document.getElementById('result-image');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'your_result.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function shareQuiz() {
    const url = window.location.href.split('?')[0];
    if (navigator.share) {
        navigator.share({
            title: 'Try this MBTI Quiz!',
            url: url
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}
