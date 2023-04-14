export default [
    {
        question: "Qual o movimento correto do peão dama?",
        answers: [
            { option: "e4", correct: false },
            { option: "c5", correct: false },
            { option: "c4", correct: false },
            { option: "d4", correct: true },
        ],
    },
    {
        question: "Qual é  o principal princípio de abertura?",
        aswers: [
            { option: "Desenvolver as peças.", correct: true },
            { option: "Fazer o roque.", correct: false },
            { option: "Fazer o movimento peão dama.", correct: false },
            { option: "Dominar o centro", correct: false },
        ],
    },
    {
        question: "Como ganhar vantagem nesta posição?",
        answers: [
            { option: "Ccxd5", correct: false },
            { option: "a6", correct: false },
            { option: "Dh5+", correct: false },
            { option: "Bd7", correct: false },
        ],
    },
    {
        question: "Qual  o melhor lance para as brancas?",
        answers: [
            { option: "a3, eliminando a possibilidade do bispo tomar Ca5, pois libera uma casa de fuga.", correct: true },
            { option: "Cd2, desenvolvendo uma peça.", correct: false },
            { option: "Db3, pressionando na casa f7.", correct: false },
            { option: "b4, atacando o bispo preto.", correct: false },
        ],
    },
    {
        question: "Qual  o melhor lance para as brancas? Para criar um peão passado.",
        answers: [
            { option: "fxe5, para passar o peão de e, ou tentar manter o rei das pretas distante.", correct: true }, //corrigir
            { option: "F5, avançar o peão para tentar passar.", correct: false },
            { option: "Rc3, esperando o preto fazer a captura.", correct: false }, //corrigir
            { option: "Rg3, esperando o preto capturar ou avançar um peão", correct: false },
        ],
    },
]