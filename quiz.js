const title = document.querySelector(".title")
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const premio = document.querySelector(".finish p");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

console.log('oi');

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
    if(questionsCorrect == 5){
        const tabuleiroMedieval = 'tabuleiro medieval'; //const previsória até a criação do tabuleiro no BD
        premio.innerHTML = `Parabéns! Você ganhou o ${tabuleiroMedieval}`
    }
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    //carregar textos de informação na tela
    title.innerHTML = `Questão ${currentIndex + 1}`;
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
        </button>
        `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("hover", mov1);
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
	    clickBtn.style.backgroundColor = '#adff2f';
        clickBtn.style.transition = '0.2s';
        questionsCorrect++;
    }else{
        clickBtn.style.backgroundColor = '#ff7b2f';
        clickBtn.style.transition = '0.2s';
    }
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        const next = setTimeout(loadQuestion, 1000);
        //loadQuestion();
    } else {
        const stop = setTimeout(finish, 1000);
    }
}

loadQuestion();