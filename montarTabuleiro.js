$(function(){
	var casa_selecionada = null;
	var peca_selecionada = null;
	function MontarTabuleiro(){
        var i;
        //criar as linhas
        for (i=0; i<8; i++){
            $("#tabuleiro").append("<div id='linha_"+i.toString()+"' class='linha' >");
            //criar as colunas
            for (j=0; j<8; j++){

                //em testes que envolvem apenas as variáveis 'i' e 'j', use valores entre 0 e 7
                //em testes que envolvem os valores da variável 'nome_casa', use valores entre 1 e 8
                var nome_casa ="casa_"+(i+(8-i*2)).toString()+"_"+(j+1).toString();
                var classe = (i%2==0?(j%2==0?"casa_branca":"casa_preta"):(j%2!=0?"casa_branca":"casa_preta"));
                $("#linha_"+i.toString()).append("<div id='"+nome_casa+"' class='casa "+classe+"' />");

                CriarPecas();

                function CriarPecas(){
                    //torres brancas
                    if(i==0&&j==0||i==0&&j==7){
                        $("#"+nome_casa).append("<img src='pecas/TorreBranca.png' class='peca' id='"+nome_casa.replace("casa","torre")+"'/>");
                    }
                    //torres pretas
                    if(i==7&&j==0||i==7&&j==7){
                        $("#"+nome_casa).append("<img src='pecas/TorrePreta.png' class='peca' id='"+nome_casa.replace("casa","torre")+"'/>");
                    }

                    //cavalos brancos
                    if(i==0&&j==1||i==0&&j==6){
                        $("#"+nome_casa).append("<img src='pecas/CavaloBranco.png' class='peca' id='"+nome_casa.replace("casa","cavalo")+"'/>");
                    }
                    //cavalos pretos
                    if(i==7&&j==1||i==7&&j==6){
                        $("#"+nome_casa).append("<img src='pecas/CavaloPreto.png' class='peca' id='"+nome_casa.replace("casa","cavalo")+"'/>");
                    }

                    //bispos brancos
                    if(i==0&&j==2||i==0&&j==5){
                        $("#"+nome_casa).append("<img src='pecas/BispoBranco.png' class='peca' id='"+nome_casa.replace("casa","bispo")+"'/>");
                    }
                    //bispos pretos
                    if(i==7&&j==2||i==7&&j==5){
                        $("#"+nome_casa).append("<img src='pecas/BispoPreto.png' class='peca' id='"+nome_casa.replace("casa","bispo")+"'/>");
                    }

                    //rainha branca
                    if(i==0&&j==3){
                        $("#"+nome_casa).append("<img src='pecas/RainhaBranca.png' class='peca' id='"+nome_casa.replace("casa","rainha")+"'/>");
                    }
                    //rainha preta
                    if(i==7&&j==3){
                        $("#"+nome_casa).append("<img src='pecas/RainhaPreta.png' class='peca' id='"+nome_casa.replace("casa","rainha")+"'/>");
                    }

                    //rei branco
                    if(i==0&&j==4){
                        $("#"+nome_casa).append("<img src='pecas/ReiBranco.png' class='peca' id='"+nome_casa.replace("casa","rei")+"'/>");
                    }
                    //rei preto
                    if(i==7&&j==4){
                        $("#"+nome_casa).append("<img src='pecas/ReiPreto.png' class='peca' id='"+nome_casa.replace("casa","rei")+"'/>");
                    }

                    if(i==1){
                        $("#"+nome_casa).append("<img src='pecas/PeaoBranco.png' class='peca' id='"+nome_casa.replace("casa","peão")+"'/>");
                    }
                    if(i==6){
                        $("#"+nome_casa).append("<img src='pecas/PeaoPreto.png' class='peca' id='"+nome_casa.replace("casa","peao")+"'/>");
                    }
                }
                
            }
        }
    }
	MontarTabuleiro();
    $(".casa").mouseenter(function(){
        function myFunction_set(){
            var cor = document.querySelector(':root');
            const cor_casa_selecionada = 
            cor.setPorperty('--cor','')

        }
        //remove a cor da casa ex-selecionada
        $("#"+casa_selecionada).removeClass("casa_selecionada");

        //deixa a casa selecionada
        casa_selecionada = $(this).attr("id");
        $("#"+casa_selecionada).addClass("casa_selecionada");

        //nomear as colunas com suas respectivas letras
        /*var coluna;
        switch(parseInt(casa_selecionada.slice(5,6))){
            case 1:
                coluna = 'a';
                break;
            case 2:
                coluna = 'b';
                break;
            case 3:
                coluna = 'c';
                break;
            case 4:
                coluna = 'd';
                break;
            case 5:
                coluna = 'e';
                break;
            case 6:
                coluna = 'f';
                break;
            case 7:
                coluna = 'g';
                break;
            case 8:
                coluna = 'h';
                break;
        }
        $("#info_casa_selecionada").text(casa_selecionada.replace(casa_selecionada.slice(5,6),coluna));

        peca_selecionada = $("#"+casa_selecionada).children("img:first").attr("id");
        if(peca_selecionada==null){
            peca_selecionada = "nehuma peça selecionada";
        }
        $("#info_peca_selecionada").text(peca_selecionada.toString());*/
    });
    $(document).ready(function(){
        
    });
    //Questões com enunciados
    
    $('#iniciar').click(function(){
        if($('.questao').is(':visible')){
            localStorage.setItem('nivelAtual','1');
            localStorage.setItem('Questão 1','Qual o movimento correto do peão dama?<br><input type="radio" id="a" name="alternativa">A- e4<br><input type="radio" id="b" name="alternativa">B- c5<br><input type="radio" id="c" name="alternativa">C- c4<br><input type="radio" id="d" name="alternativa">D- d4');
            localStorage.setItem('Questão 2','Qual é o principal princípio de abertura?<br><input type="radio" id="a" name="alternativa">A- Desenvolver as peças<br><input type="radio" id="b" name="alternativa">B- Fazer o roque<br><input type="radio" id="c" name="alternativa"><br>C- Fazer o movimento peão dama<br><input type="radio" id="d" name="alternativa">D- Dominar o centro');
            localStorage.setItem('Questão 3','Como ganhar vantagem nesta posição?<br><input type="radio" id="a" name="alternativa">A- Ccxd5<br><input type="radio" id="b" name="alternativa">B- a6<br><input type="radio" id="c" name="alternativa">C- Dh5+, Dxb5<br><input type="radio" id="d" name="alternativa">D- Bd7');
            $('.questao').hide();
            $('#iniciar').val('Fazer Desafio');
        }else{
            switch(localStorage.getItem('nivelAtual')){
                case '1':
                    $('#questaoTexto').html(localStorage.getItem('Questão 1'));
                    break;
                case '2':
                    $('#questaoTexto').html(localStorage.getItem('Questão 2'));
                    break;
                case '3':
                    $('#questaoTexto').html(localStorage.getItem('Questão 3'));
                    break;
                case '4':
                    $('#questaoTexto').html(localStorage.getItem('Questão 4'));
                    break;
                case '5':
                    $('#questaoTexto').html(localStorage.getItem('Questão 5'));
                    break;
            }
            $('.questao').show();
            $('#iniciar').val('Voltar');
            localStorage.setItem('nivelAtual', n++);
        }
    })
});