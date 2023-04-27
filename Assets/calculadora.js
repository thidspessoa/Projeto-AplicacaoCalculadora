function calcular (tipo, valor) {
    // console.log(tipo, valor)

    if (tipo === 'acao'){

        if(valor === 'c'){
            //limpar o vior (id resultado)
            document.getElementById('resultado').value = ''; //Adicionando um valor vazil, isso irá limpar o campo
        };
        
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){ //Aqui basta que um valor seja verdadeiro para que todo o if seja true
            document.getElementById('resultado').value += valor;

        };

        if(valor === '='){
            let valorCampo = eval(document.getElementById('resultado').value);//Estamos recuperando o valor do imput resultado, estamos processando esse valor com eval
           
            document.getElementById('resultado').value = valorCampo; //Estamos sobrepondo o valor contido em resultado, pelo valor desta expressão matematica
        }


    } else if(tipo === 'valor'){
        // document.getElementById('resultado').value = valor; //Estamos selecionando o objeto e atribuindo como valor deste campo o valor recebido por parametro. 
        document.getElementById('resultado').value += valor; //Aqui deixamos o código mais enxuto, utilizando o operador de igual e mais juntos, ele pega o valor já contido no campo e no processo de atribuição ele faz o processo de concatenação dos valores. Isso torna dispensavel recuperar o valor em uma variavel
    };
}



/*  =======================================================================================
                                    EVAL
    ======================================================================================*/

    /*Submetemos ao eval um parametro que é uma string, e ele interpreta essa string como sendo uma instrução
    JS. É como se nós pegassemos a nossa string e submetessemos pro interpretador do JS, fornecendo para nós
    um resultado.*/

    /*Basicamente o eval é uma função poderosa, que permite que o código JS seja executado a partir de uma string. Ela 
    é usada para analisar uma string como  se fosse um script JS e executar o código contido nela. */


    var x = 10;
    var y = 5;
    var z = eval("x + y"); //z terá o valor de 15

    /*Nesse exemplo, a função "eval()" é usada para executar uma expressão matemática contida em uma string. O resultado da 
    expressão é atribuído à variável "z". No entanto, como mencionado anteriormente, é recomendável evitar o
    uso de "eval()" sempre que possível para garantir a segurança do seu código. */
    




    /*ALERTA
    ======================================================================================*/

    /*
    O "eval()" é uma função poderosa, mas também pode ser perigosa se usado de maneira inadequada.
    Se a string passada para "eval()" contiver código malicioso, ele será executado no contexto da
    página e poderá ser usado para roubar informações confidenciais, injetar scripts maliciosos ou
    executar outras ações prejudiciais.

    Por esse motivo, é altamente recomendável evitar o uso do "eval()" sempre que possível.
    Em vez disso, use métodos mais seguros e confiáveis para analisar e executar código JavaScript
    dinamicamente, como a função "Function()", que permite criar uma nova função a partir de uma string.
    */