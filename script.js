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
const choice0 = document.getElementById("choice-0");
const choice1 = document.getElementById("choice-1");
const progress = document.getElementById("progress");
const progressBarContainer = document.getElementById("progress-bar-container");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");

    // Show the progress bar once the quiz starts (removes the 'hidden' class)
    progressBarContainer.classList.remove("hidden");

    showQuestion();
}

function updateProgressBar() {
    const percent = (currentQuestion / questions.length) * 100;
    document.getElementById("progress-bar").style.width = `${percent}%`;
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    choice0.textContent = q.answers[0].text;
    choice1.textContent = q.answers[1].text;
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

    updateProgressBar();

    choice0.onclick = () => selectAnswer(q.answers[0].types);
    choice1.onclick = () => selectAnswer(q.answers[1].types);
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
    // Determine MBTI by highest letter in each pair
    const result =
        (scores["E"] > scores["I"] ? "E" : "I") +
        (scores["S"] > scores["N"] ? "S" : "N") +
        (scores["T"] > scores["F"] ? "T" : "F") +
        (scores["J"] > scores["P"] ? "J" : "P");

    window.location.href = `results.html?type=${result}`;
}

function retry() {
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
    const url = window.location.href.split('?')[0]; // Just the base URL
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
