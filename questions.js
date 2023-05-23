function mov(peca, pecaInicial, pecaFinal, casaInicial, casaFinal, tempo, tempoFinal){
    setTimeout(() => {
        $('#'+pecaInicial).remove();
        $(casaFinal).append("<img src='pecas/"+peca+".png' class='peca' id='"+pecaFinal+"'/>");
    }, tempo);
    setTimeout(() => {
        $('#'+pecaFinal).remove();
        $(casaInicial).append("<img src='pecas/"+peca+".png' class='peca' id='"+pecaInicial+"'/>");
    }, tempoFinal);
}
export default [
    {
        question: "Qual o movimento correto do peão dama?",
        answers: [
            { option: "e4", correct: false },
            { option: "c5", correct: false },
            { option: "c4", correct: false },
            { option: "d4", correct: true, action: function(){
                mov('PeaoPreto', 'peaoPreto_2_4', 'peaoPreto_4_4', '#casa_2_4', '#casa_4_4', 0, 1000);
            }},
        ],
        time: 1000,
    },
    {
        question: "Qual é  o principal princípio de abertura?",
        answers: [
            { option: "Desenvolver as peças.", correct: true, action: function(){
                mov('PeaoPreto', 'peaoPreto_2_5', 'peaoPreto_4_5', '#casa_2_5', '#casa_4_5', 0, 6500);            //e4
                mov('PeaoBranco', 'peaoBranco_7_5', 'peaoBranco_5_5', '#casa_7_5', '#casa_5_5', 600, 6500);       //e5
                mov('CavaloPreto', 'cavaloPreto_1_2', 'cavaloPreto_3_3', '#casa_1_2', '#casa_3_3', 1200, 6500);    //Cc3
                mov('CavaloBranco', 'cavaloBranco_8_7', 'cavaloBranco_6_6', '#casa_8_7', '#casa_6_6', 1800, 6500);//Cf6
                mov('PeaoPreto', 'peaoPreto_2_7', 'peaoPreto_3_7', '#casa_2_7', '#casa_3_7', 2400, 6500);         //g3
                mov('CavaloBranco', 'cavaloBranco_8_2', 'cavaloBranco_6_3', '#casa_8_2', '#casa_6_3', 3000, 6500);//Cc6
                mov('BispoPreto', 'bispoPreto_1_6', 'bispoPreto_2_7', '#casa_1_6', '#casa_2_7', 3600, 6500);      //Bg2
                mov('BispoBranco', 'bispoBranco_8_6', 'bispoBranco_5_3', '#casa_8_6', '#casa_5_3', 4200, 6500);   //Bc5
                mov('CavaloPreto', 'cavaloPreto_1_7', 'cavaloPreto_2_5', '#casa_1_7', '#casa_2_5', 4800, 6500);   //Cge2
                mov('ReiPreto','reiPreto_1_5', 'reiPreto_1_7', '#casa_1_5', '#casa_1_7', 5600, 6500);             //0-0
                mov('TorrePreta', 'torrePreta_1_8', 'torrePreta_1_6', '#casa_1_8', '#casa_1_6', 5600, 6500);      //0-0
                mov('ReiBranco', 'reiBranco_8_5', 'reiBranco_8_7', '#casa_8_5', '#casa_8_7', 6000, 6500);         //0-0
                mov('TorreBranca', 'torreBranca_8_8', 'torreBranca_8_6', '#casa_8_8', '#casa_8_6', 6000, 6500);   //0-0
            } },
            { option: "Fazer o roque.", correct: false },
            { option: "Fazer o movimento peão dama.", correct: false },
            { option: "Dominar o centro", correct: false },
        ],
        time: 6500,
    },
    {
        question: "Como ganhar vantagem nesta posição?",
        answers: [
            { option: "Ccxd5", correct: false },
            { option: "a6", correct: false },
            { option: "Dh5+, Dxb5", correct: true },
            { option: "Bd7", correct: false},
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