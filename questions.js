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
        initialBoard: () =>{},
        answers: [
            { option: "e4", correct: false },
            { option: "c5", correct: false },
            { option: "c4", correct: false },
            { option: "d4", correct: true, action: () => {
                mov('PeaoBranco', 'peaoBranco_2_4', 'peaoBranco_4_4', '#casa_2_4', '#casa_4_4', 0, 1000);
            }},
        ],
        time: 1000,
    },
    {
        question: "Qual é  o principal princípio de abertura?",
        initialBoard: () =>{},
        answers: [
            { option: "Desenvolver as peças.", correct: true, action: () => {
                //mov('PeaoBranco', 'peaoBranco_2_5', 'peaoBranco_4_5', '#casa_2_5', '#casa_4_5', 0, 6500);            //e4
                //mov('PeaoPreto', 'peaoPreto_7_5', 'peaoPreto_5_5', '#casa_7_5', '#casa_5_5', 600, 6500);       //e5
                //mov('CavaloBranco', 'cavaloBranco_1_2', 'cavaloBranco_3_3', '#casa_1_2', '#casa_3_3', 1200, 6500);    //Cc3
                //mov('CavaloPreto', 'cavaloPreto_8_7', 'cavaloPreto_6_6', '#casa_8_7', '#casa_6_6', 1800, 6500);//Cf6
                //mov('PeaoBranco', 'peaoBranco_2_7', 'peaoBranco_3_7', '#casa_2_7', '#casa_3_7', 2400, 6500);         //g3
                //mov('CavaloPreto', 'cavaloPreto_8_2', 'cavaloPreto_6_3', '#casa_8_2', '#casa_6_3', 3000, 6500);//Cc6
                //mov('BispoBranco', 'bispoBranco_1_6', 'bispoBranco_2_7', '#casa_1_6', '#casa_2_7', 3600, 6500);      //Bg2
                //mov('BispoPreto', 'bispoPreto_8_6', 'bispoPreto_5_3', '#casa_8_6', '#casa_5_3', 4200, 6500);   //Bc5
                //mov('CavaloBranco', 'cavaloBranco_1_7', 'cavaloBranco_2_5', '#casa_1_7', '#casa_2_5', 4800, 6500);   //Cge2
                //mov('ReiBranco','reiBranco_1_5', 'reiBranco_1_7', '#casa_1_5', '#casa_1_7', 5600, 6500);             //0-0
                //mov('TorreBranca', 'torreBranca_1_8', 'torreBranca_1_6', '#casa_1_8', '#casa_1_6', 5600, 6500);      //0-0
                //mov('ReiPreto', 'reiPreto_8_5', 'reiPreto_8_7', '#casa_8_5', '#casa_8_7', 6000, 6500);         //0-0
                //mov('TorrePreta', 'torrePreta_8_8', 'torrePreta_8_6', '#casa_8_8', '#casa_8_6', 6000, 6500);   //0-0
            } },
            { option: "Fazer o roque.", correct: false },
            { option: "Fazer o movimento peão dama.", correct: false },
            { option: "Dominar o centro", correct: false },
        ],
        time: 500,
    },
    {
        question: "Como as pretas podem ganhar vantagem nesta posição?",
        initialBoard: () =>{
            $('#peaoBranco_2_4').remove();
            $('#peaoBranco_2_5').remove();
            $('#peaoPreto_7_3').remove();
            $('#peaoPreto_7_5').remove();
            mov('PeaoPreto', 'peaoPreto_7_1', 'peaoPreto_6_1', '#casa_7_1', '#casa_6_1', 0, 10000);
            mov('PeaoPreto', 'peaoPreto_7_4', 'peaoPreto_6_4', '#casa_7_4', '#casa_6_4', 0, 10000);
            mov('CavaloPreto', 'cavaloPreto_8_7', 'cavaloPreto_6_6', '#casa_8_7', '#casa_6_6', 0, 10000);
            mov('PeaoBranco', 'peaoBranco_2_8', 'peaoBranco_3_8', '#casa_2_8', '#casa_3_8', 0, 10000);
            mov('CavaloBranco', 'cavaloBranco_1_2', 'cavaloBranco_5_4', '#casa_1_2', '#casa_5_4', 0, 10000);
            mov('BispoBranco', 'bispoBranco_1_3', 'bispoBranco_5_7', '#casa_1_3', '#casa_5_7', 0, 10000);
        },
        answers: [
            { option: "Ccxd5", correct: false },
            { option: "a6", correct: false },
            { option: "Dh5+, Dxb5", correct: true, action: () => {
                mov('BispoBranco', 'bispoBranco_1_3', 'bispoBranco_6_8', '#casa_1_3', '#casa_6_8', 0, 1000);
            } },
            { option: "Bd7", correct: false},
        ],
        time: 1000,
    },
    {
        question: "Qual  o melhor lance para as brancas?",
        initialBoard: () =>{
            $('#cavaloPreto_8_7').remove();
            $('bispoBranco_1_6').remove();
            mov('PeaoBranco', 'peaoBranco_2_5', 'peaoBranco_4_5', '#casa_2_5', '#casa_4_5', 0, 10000); //e4
            mov('BispoBranco', 'bispoBranco_1_6', 'bispoBranco_4_3', '#casa_1_6', '#casa_4_3', 0, 10000); //Bc4
            mov('CavaloBranco', 'cavaloBranco_1_7', 'cavaloBranco_3_6', '#casa_1_7', '#casa_3_6', 0, 10000); //Cf3
            mov('ReiBranco','reiBranco_1_5', 'reiBranco_1_7', '#casa_1_5', '#casa_1_7', 0, 10000); //0-0
            mov('TorreBranca', 'torreBranca_1_8', 'torreBranca_1_6', '#casa_1_8', '#casa_1_6', 0, 10000); //0-0
            mov('PeaoBranco', 'peaoBranco_2_3', 'peaoBranco_3_3', '#casa_2_3', '#casa_3_3', 0, 10000); //c3
            mov('PeaoBranco', 'peaoBranco_2_4', 'peaoBranco_3_4', '#casa_2_4', '#casa_3_4', 0, 10000); //d3
            mov('PeaoPreto', 'peaoPreto_7_4', 'peaoPreto_6_4', '#casa_7_4', '#casa_6_4', 0, 10000); //d6
            mov('PeaoPreto', 'peaoPreto_7_5', 'peaoPreto_5_5', '#casa_7_5', '#casa_5_5', 0, 10000); //e5
            mov('PeaoPreto', 'peaoPreto_7_8', 'peaoPreto_6_8', '#casa_7_8', '#casa_6_8', 0, 10000); //h6
            mov('CavaloPreto', 'cavaloPreto_8_2', 'cavaloPreto_6_3', '#casa_8_2', '#casa_6_3', 0, 10000); //Cc6
            mov('BispoPreto', 'bispoPreto_8_6', 'bispoPreto_5_6')
        },
        answers: [
            { option: "a3, eliminando a possibilidade do bispo tomar Ca5, pois libera uma casa de fuga.", correct: true, action: () => {

            } },
            { option: "Cd2, desenvolvendo uma peça.", correct: false },
            { option: "Db3, pressionando na casa f7.", correct: false },
            { option: "b4, atacando o bispo preto.", correct: false },
        ],
        time: 1000,
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