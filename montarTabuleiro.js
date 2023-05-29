$(function(){
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
                    //torres pretas
                    if(i==0&&j==0||i==0&&j==7){
                        $("#"+nome_casa).append("<img src='pecas/TorrePreta.png' class='peca' id='"+nome_casa.replace("casa","torrePreta")+"'/>");
                    }
                    //torres brancas
                    if(i==7&&j==0||i==7&&j==7){
                        $("#"+nome_casa).append("<img src='pecas/TorreBranca.png' class='peca' id='"+nome_casa.replace("casa","torreBranca")+"'/>");
                    }

                    //cavalos Pretos
                    if(i==0&&j==1||i==0&&j==6){
                        $("#"+nome_casa).append("<img src='pecas/CavaloPreto.png' class='peca' id='"+nome_casa.replace("casa","cavaloPreto")+"'/>");
                    }
                    //cavalos Brancos
                    if(i==7&&j==1||i==7&&j==6){
                        $("#"+nome_casa).append("<img src='pecas/CavaloBranco.png' class='peca' id='"+nome_casa.replace("casa","cavaloBranco")+"'/>");
                    }

                    //bispos Pretos
                    if(i==0&&j==2||i==0&&j==5){
                        $("#"+nome_casa).append("<img src='pecas/BispoPreto.png' class='peca' id='"+nome_casa.replace("casa","bispoPreto")+"'/>");
                    }
                    //bispos Brancos
                    if(i==7&&j==2||i==7&&j==5){
                        $("#"+nome_casa).append("<img src='pecas/BispoBranco.png' class='peca' id='"+nome_casa.replace("casa","bispoBranco")+"'/>");
                    }

                    //rainha Preta
                    if(i==0&&j==3){
                        $("#"+nome_casa).append("<img src='pecas/RainhaPreta.png' class='peca' id='"+nome_casa.replace("casa","rainhaPreta")+"'/>");
                    }
                    //rainha Branca
                    if(i==7&&j==3){
                        $("#"+nome_casa).append("<img src='pecas/RainhaBranca.png' class='peca' id='"+nome_casa.replace("casa","rainhaBranca")+"'/>");
                    }

                    //rei Preto
                    if(i==0&&j==4){
                        $("#"+nome_casa).append("<img src='pecas/ReiPreto.png' class='peca' id='"+nome_casa.replace("casa","reiPreto")+"'/>");
                    }
                    //rei Branco
                    if(i==7&&j==4){
                        $("#"+nome_casa).append("<img src='pecas/ReiBranco.png' class='peca' id='"+nome_casa.replace("casa","reiBranco")+"'/>");
                    }

                    if(i==1){
                        $("#"+nome_casa).append("<img src='pecas/PeaoPreto.png' class='peca' id='"+nome_casa.replace("casa","peaoPreto")+"'/>");
                    }
                    if(i==6){
                        $("#"+nome_casa).append("<img src='pecas/PeaoBranco.png' class='peca' id='"+nome_casa.replace("casa","peaoBranco")+"'/>");
                    }
                }
                
            }
        }
    }
	MontarTabuleiro();
});
