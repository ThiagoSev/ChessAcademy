const title = document.querySelector(".title")
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
  
    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function finish() {
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    title.innerHTML = `Questão ${currentIndex + 1}`;
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;   
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;
    let i = 0;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" id="${i}" data-correct="${answer.correct}">
        ${answer.option}
        </button>
        `;
        i++;

        answers.appendChild(div);
    });
    item.initialBoard();
    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}
function nextQuestion(e) {
    const otherBtn = document.querySelectorAll('.answer');
    otherBtn.forEach((other) => {
        other.style.backgroundColor = '#bebebe';
        other.style.transition = '0.2s';
    });

    const clickBtn = e.target;
    if (e.target.getAttribute("data-correct") === "true") {
        questions[currentIndex].answers[this.id].action();
	    clickBtn.style.backgroundColor = '#61E294';
        clickBtn.style.transition = '0.2s';
        questionsCorrect++;
    }else{
        clickBtn.style.backgroundColor = '#DB504A';
        clickBtn.style.transition = '0.2s';
    }
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        setTimeout(loadQuestion, questions[currentIndex-1].time);
        //loadQuestion();
    } else {
        setTimeout(finish, 1000);
    }
}

loadQuestion();