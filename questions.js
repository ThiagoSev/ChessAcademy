function initialBoard(peca, pecaInicial, pecaFinal, casaInicial, casaFinal, tempo){
    setTimeout(() => {
        $('#'+pecaInicial).remove();
        $(casaFinal).append("<img src='pecas/"+peca+".png' class='peca' id='"+pecaFinal+"'/>");
    }, tempo);
}


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

function catched(pecaInicial, tempo){
    setTimeout(() => {
        $(pecaInicial).remove();
    }, tempo);
}

function resetBoard(){
    $('.casa').empty();
    $('#casa_1_1').append("<img src='pecas/TorreBranca.png' class='peca' id='torreBranca_1_1'/>");
    $('#casa_1_2').append("<img src='pecas/CavaloBranco.png' class='peca' id='cavaloBranco_1_2'/>");
    $('#casa_1_3').append("<img src='pecas/BispoBranco.png' class='peca' id='bispoBranco_1_3'>");
    $('#casa_1_4').append("<img src='pecas/RainhaBranca.png' class='peca' id='rainhaBranca_1_4'>");
    $('#casa_1_5').append("<img src='pecas/ReiBranco.png' class='peca' id='reiBranco_1_5'>");
    $('#casa_1_6').append("<img src='pecas/BispoBranco.png' class='peca' id='bispoBranco_1_6'>");
    $('#casa_1_7').append("<img src='pecas/CavaloBranco.png' class='peca' id='cavaloBranco_1_7'/>");
    $('#casa_1_8').append("<img src='pecas/TorreBranca.png' class='peca' id='torreBranca_1_8'/>");
    $('#casa_2_1').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_1'/>");
    $('#casa_2_2').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_2'/>");
    $('#casa_2_3').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_3'/>");
    $('#casa_2_4').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_4'/>");
    $('#casa_2_5').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_5'/>");
    $('#casa_2_6').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_6'/>");
    $('#casa_2_7').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_7'/>");
    $('#casa_2_8').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_2_8'/>");
    $('#casa_8_1').append("<img src='pecas/TorrePreta.png' class='peca' id='torreBranca_8_1'/>");
    $('#casa_8_2').append("<img src='pecas/CavaloPreto.png' class='peca' id='cavaloPreto_8_2'/>");
    $('#casa_8_3').append("<img src='pecas/BispoPreto.png' class='peca' id='bispoPreto_8_3'>");
    $('#casa_8_4').append("<img src='pecas/RainhaPreta.png' class='peca' id='rainhaPreta_8_4'>");
    $('#casa_8_5').append("<img src='pecas/ReiPreto.png' class='peca' id='reiPreto_8_5'>");
    $('#casa_8_6').append("<img src='pecas/BispoPreto.png' class='peca' id='bispoPreto_8_6'>");
    $('#casa_8_7').append("<img src='pecas/CavaloPreto.png' class='peca' id='cavaloPreto_8_7'/>");
    $('#casa_8_8').append("<img src='pecas/TorrePreta.png' class='peca' id='torrePreta_8_8'/>");
    $('#casa_7_1').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_1'/>");
    $('#casa_7_2').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_2'/>");
    $('#casa_7_3').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_3'/>");
    $('#casa_7_4').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_4'/>");
    $('#casa_7_5').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_5'/>");
    $('#casa_7_6').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_6'/>");
    $('#casa_7_7').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_7'/>");
    $('#casa_7_8').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_8'/>");
}



export default [
    {
        //QUESTÃO 1
        question: "Qual o movimento correto do peão dama?",
        initialBoard: () =>{
            resetBoard();
        },
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
        //QUESTÃO 2
        question: "Qual é  o principal princípio de abertura?",
        initialBoard: () =>{},
        answers: [
            { option: "Desenvolver as peças.", correct: true, action: () => {
                mov('PeaoBranco', 'peaoBranco_2_5', 'peaoBranco_4_5', '#casa_2_5', '#casa_4_5', 0, 6500);            //e4
                mov('PeaoPreto', 'peaoPreto_7_5', 'peaoPreto_5_5', '#casa_7_5', '#casa_5_5', 600, 6500);            //e5
                mov('CavaloBranco', 'cavaloBranco_1_2', 'cavaloBranco_3_3', '#casa_1_2', '#casa_3_3', 1200, 6500);  //Cc3
                mov('CavaloPreto', 'cavaloPreto_8_7', 'cavaloPreto_6_6', '#casa_8_7', '#casa_6_6', 1800, 6500);     //Cf6
                mov('PeaoBranco', 'peaoBranco_2_7', 'peaoBranco_3_7', '#casa_2_7', '#casa_3_7', 2400, 6500);        //g3
                mov('CavaloPreto', 'cavaloPreto_8_2', 'cavaloPreto_6_3', '#casa_8_2', '#casa_6_3', 3000, 6500);     //Cc6
                mov('BispoBranco', 'bispoBranco_1_6', 'bispoBranco_2_7', '#casa_1_6', '#casa_2_7', 3600, 6500);     //Bg2
                mov('BispoPreto', 'bispoPreto_8_6', 'bispoPreto_5_3', '#casa_8_6', '#casa_5_3', 4200, 6500);        //Bc5
                mov('CavaloBranco', 'cavaloBranco_1_7', 'cavaloBranco_2_5', '#casa_1_7', '#casa_2_5', 4800, 6500);  //Cge2
                mov('ReiBranco','reiBranco_1_5', 'reiBranco_1_7', '#casa_1_5', '#casa_1_7', 5600, 6500);            //0-0
                mov('TorreBranca', 'torreBranca_1_8', 'torreBranca_1_6', '#casa_1_8', '#casa_1_6', 5600, 6500);     //0-0
                mov('ReiPreto', 'reiPreto_8_5', 'reiPreto_8_7', '#casa_8_5', '#casa_8_7', 6000, 6500);              //0-0
                mov('TorrePreta', 'torrePreta_8_8', 'torrePreta_8_6', '#casa_8_8', '#casa_8_6', 6000, 6500);        //0-0
            }},
            { option: "Fazer o roque.", correct: false },
            { option: "Fazer o movimento peão dama.", correct: false },
            { option: "Dominar o centro", correct: false },
        ],
        time: 6500,
    },
    {
        //QUESTÃO 3
        question: "Como as pretas podem ganhar vantagem nesta posição?",
        initialBoard: () =>{
            resetBoard();
            $('#peaoBranco_2_4').remove();
            $('#peaoBranco_2_5').remove();
            $('#peaoPreto_7_3').remove();
            $('#peaoPreto_7_5').remove();
            initialBoard('PeaoPreto', 'peaoPreto_7_1', 'peaoPreto_6_1', '#casa_7_1', '#casa_6_1', 0);
            initialBoard('PeaoPreto', 'peaoPreto_7_4', 'peaoPreto_6_4', '#casa_7_4', '#casa_6_4', 0);
            initialBoard('CavaloPreto', 'cavaloPreto_8_7', 'cavaloPreto_6_6', '#casa_8_7', '#casa_6_6', 0);
            initialBoard('PeaoBranco', 'peaoBranco_2_8', 'peaoBranco_3_8', '#casa_2_8', '#casa_3_8', 0);
            initialBoard('CavaloBranco', 'cavaloBranco_1_2', 'cavaloBranco_5_4', '#casa_1_2', '#casa_5_4', 0);
            initialBoard('BispoBranco', 'bispoBranco_1_3', 'bispoBranco_5_7', '#casa_1_3', '#casa_5_7', 0);
        },
        answers: [
            { option: "Ccxd5", correct: false },
            { option: "a6", correct: false },
            { option: "Dh5+, Dxb5", correct: true, action: () => {
                mov('RainhaPreta', 'rainhaPreta_8_4', 'rainhaPreta_5_1', '#casa_8_4', '#casa_5_1', 0, 1800);
                mov('CavaloBranco', 'cavaloBranco_5_4', 'cavaloBranco_3_3', '#casa_5_4', '#casa_3_3', 600, 1800);
                mov('RainhaPreta', 'rainhaPreta_5_1', 'rainhaPreta_5_7', '#casa_5_1', '#casa_5_7', 1200, 1800);
                catched('#bispoBranco_5_7', 1200);
            } },
            { option: "Bd7", correct: false},
        ],
        time: 1800,
    },
    {
        //QUESTÃO 4
        question: "Qual  o melhor lance para as brancas?",
        initialBoard: () =>{
            resetBoard();
            $('#cavaloPreto_8_7').remove();
            $('#bispoBranco_1_3').remove();
            initialBoard('PeaoBranco', 'peaoBranco_2_5', 'peaoBranco_4_5', '#casa_2_5', '#casa_4_5', 0); //e4
            initialBoard('BispoBranco', 'bispoBranco_1_6', 'bispoBranco_4_3', '#casa_1_6', '#casa_4_3', 0); //Bc4
            initialBoard('CavaloBranco', 'cavaloBranco_1_7', 'cavaloBranco_3_6', '#casa_1_7', '#casa_3_6', 0); //Cf3
            initialBoard('ReiBranco','reiBranco_1_5', 'reiBranco_1_7', '#casa_1_5', '#casa_1_7', 0); //0-0
            initialBoard('TorreBranca', 'torreBranca_1_8', 'torreBranca_1_6', '#casa_1_8', '#casa_1_6', 0); //0-0
            initialBoard('PeaoBranco', 'peaoBranco_2_3', 'peaoBranco_3_3', '#casa_2_3', '#casa_3_3', 0); //c3
            initialBoard('PeaoBranco', 'peaoBranco_2_4', 'peaoBranco_3_4', '#casa_2_4', '#casa_3_4', 0); //d3
            initialBoard('PeaoPreto', 'peaoPreto_7_4', 'peaoPreto_6_4', '#casa_7_4', '#casa_6_4', 0); //d6
            initialBoard('PeaoPreto', 'peaoPreto_7_5', 'peaoPreto_5_5', '#casa_7_5', '#casa_5_5', 0); //e5
            initialBoard('PeaoPreto', 'peaoPreto_7_8', 'peaoPreto_6_8', '#casa_7_8', '#casa_6_8', 0); //h6
            initialBoard('CavaloPreto', 'cavaloPreto_8_2', 'cavaloPreto_6_3', '#casa_8_2', '#casa_6_3', 0); //Cc6
            initialBoard('BispoPreto', 'bispoPreto_8_6', 'bispoPreto_5_3', '#casa_8_6', '#casa_5_3', 0);
            initialBoard('ReiPreto', 'reiPreto_8_5', 'reiPreto_8_7', '#casa_8_5', '#casa_8_7', 0);              //0-0
            initialBoard('TorrePreta', 'torrePreta_8_8', 'torrePreta_8_6', '#casa_8_8', '#casa_8_6', 0);        //0-0
            initialBoard('RainhaPreta', 'rainhaPreta_8_4', 'rainhaPreta_6_6', '#casa_8_4', '#casa_6_6', 0);
        },
        answers: [
            { option: "a3, eliminando a possibilidade do bispo tomar Ca5, pois libera uma casa de fuga.", correct: true, action: () => {
                mov('PeaoBranco', 'peaoBranco_2_1', 'peaoBranco_3_1', '#casa_2_1', '#casa_3_1', 0, 1800);
                mov('CavaloPreto', 'cavaloPreto_6_3', 'cavaloPreto_5_1', '#casa_6_3', '#casa_5_1', 600, 1800);
                mov('BispoBranco', 'bispoBranco_4_3', 'bispoBranco_2_1', '#casa_4_3', '#casa_2_1', 1200, 1800);
            } },
            { option: "Cd2, desenvolvendo uma peça.", correct: false },
            { option: "Db3, pressionando na casa f7.", correct: false },
            { option: "b4, atacando o bispo preto.", correct: false },
        ],
        time: 1800,
    },
    {
        //QUESTÃO 5
        question: "Qual  o melhor lance para as brancas? Para criar um peão passado.",
        initialBoard: () =>{
            $('.casa').empty();
            $('#casa_3_1').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_3_1'/>");
            $('#casa_4_2').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_4_2'/>");
            $('#casa_5_3').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_5_3'/>");
            $('#casa_4_5').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_4_5'/>");
            $('#casa_4_6').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_4_6'/>");
            $('#casa_4_8').append("<img src='pecas/PeaoBranco.png' class='peca' id='peaoBranco_4_8'/>");
            $('#casa_3_6').append("<img src='pecas/ReiBranco.png' class='peca' id='reiBranco_3_6'>");
            $('#casa_6_1').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_6_1'/>");
            $('#casa_7_2').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_7_2'/>");
            $('#casa_6_3').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_6_3'/>");
            $('#casa_5_5').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_5_5'/>");
            $('#casa_6_7').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_6_7'/>");
            $('#casa_5_8').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_5_8'/>");
            $('#casa_6_1').append("<img src='pecas/PeaoPreto.png' class='peca' id='peaoPreto_6_1'/>");
            $('#casa_6_6').append("<img src='pecas/ReiPreto.png' class='peca' id='reiPreto_6_6'>");
        },
        answers: [
            { option: "fxe5, para passar o peão de e, ou tentar manter o rei das pretas distante.", correct: true, action: () => {
                mov('PeaoBranco', 'peaoBranco_4_6', 'peaoBranco_5_5', '#casa_4_6', '#casa_5_5', 0, 14400); //fxe5
                catched('#peaoPreto_5_5', 0); //fxe5
                mov('ReiPreto', 'reiPreto_6_6', 'reiPreto_5_5', '#casa_6_6', '#casa_5_5', 600, 14400); //Rxe5
                catched('#peaoBranco_5_5', 600); //Rxe5
                mov('ReiBranco', 'reiBranco_3_6', 'reiBranco_3_5', '#casa_3_6', '#casa_3_5', 1200, 14400); //Re3
                mov('ReiPreto', 'reiPreto_5_5', 'reiPreto_6_6', '#casa_5_5', '#casa_6_6', 1800, 14400); //Rf6
                mov('ReiBranco', 'reiBranco_3_5', 'reiBranco_4_6', '#casa_3_5', '#casa_4_6', 2400, 14400); //Rf4
                mov('ReiPreto', 'reiPreto_6_5', 'reiPreto_6_6', '#casa_6_5', '#casa_6_6', 3000, 14400); //Rf6
                mov('PeaoBranco', 'peaoBranco_4_5', 'peaoBranco_5_5', '#casa_4_5', '#casa_5_5', 3600, 14400); //e5+
                mov('ReiPreto', 'reiPreto_6_6', 'reiPreto_6_5', '#casa_6_6', '#casa_6_5', 4200, 14400); //Re6
                mov('ReiBranco', 'reiBranco_4_6', 'reiBranco_5_7', '#casa_4_6', '#casa_5_7', 4800, 14400); //Rg5
                mov('ReiPreto', 'reiPreto_6_5', 'reiPreto_5_5', '#casa_6_5', '#casa_5_5', 5400, 14400); //Rxe5
                catched('peaoBranco_5_5', 5400); //Rxe5
                mov('ReiBranco', 'reiBranco_5_7', 'reiBranco_6_7', '#casa_5_7', '#casa_6_7', 6000, 14400); //Rxg6
                catched('peaoPreto_6_7', 6000); //Rxg6
                mov('ReiPreto', 'reiPreto_5_5', 'reiPreto_4_4', '#casa_5_5', '#casa_4_4', 6600, 14400); //Rd4
                mov('ReiBranco', 'reiBranco_6_7', 'reiBranco_5_8', '#casa_6_7', '#casa_5_8', 7200, 14400); //Rxh5
                catched('peaoPreto_5_8', 7200); //Rxh5
                mov('ReiPreto', 'reiPreto_4_4', 'reiPreto_3_3', '#casa_4_4', '#casa_3_3', 7800, 14400); //Rc3
                mov('ReiBranco', 'reiBranco_5_8', 'reiBranco_5_7', '#casa_5_8', '#casa_5_7', 8400, 14400); //Rg5
                mov('ReiPreto', 'reiPreto_3_3', 'reiPreto_3_2', '#casa_3_3', '#casa_3_2', 9000, 14400); //Rb3
                mov('PeaoBranco', 'peaoBranco_4_8', 'peaoBranco_5_8', '#casa_4_8', '#casa_5_8', 9600, 14400); //h5
                mov('ReiPreto', 'reiPreto_3_2', 'reiPreto_3_1', '#casa_3_2', '#casa_3_1', 10200, 14400); //Rxa3
                catched('peaoBranco_3_1', 10200); //Rxa3
                mov('PeaoBranco', 'peaoBranco_5_8', 'peaoBranco_6_8', '#casa_5_8', '#casa_6_8', 10800, 14400); //h6
                mov('ReiPreto', 'reiPreto_3_1', 'reiPreto_4_2', '#casa_3_1', '#casa_4_2', 11400, 14400); //Rxb4
                catched('peaoBranco_4_2', 11400); //Rxb4
                mov('PeaoBranco', 'peaoBranco_6_8', 'peaoBranco_7_8', '#casa_6_8', '#casa_7_8', 12000, 14400); //h7
                mov('ReiPreto', 'reiPreto_4_2', 'reiPreto_5_3', '#casa_4_2', '#casa_5_3', 12600, 14400); //Rxc5
                catched('peaoBranco_5_3', 12600); //Rxc5
                mov('PeaoBranco', 'peaoBranco_7_8', 'peaoBranco_8_8', '#casa_7_8', '#casa_8_8', 13200, 14400); //peao vira rainha
                catched('peaoBranco_8_8', 13200);
                setTimeout(() => {
                    $('#casa_8_8').append("<img src='pecas/RainhaBranca.png' class='peca' id='rainhaBranca_8_8'>");
                }, 13200);
            } }, //corrigir
            { option: "F5, avançar o peão para tentar passar.", correct: false },
            { option: "Rc3, esperando o preto fazer a captura.", correct: false }, //corrigir
            { option: "Rg3, esperando o preto capturar ou avançar um peão", correct: false },
        ],
        time: 14400,
    },
]