//A função foi feita para verificar se existem ou não números repetidos 
function verificaNumerosRepetidos(listaNumeros) {
    //A lista de números repetidos se inicia vazia
    var listaRepetidos = [];
    /*O primeiro "for" irá passar por toda a lista de números, já o segundo, irá passar pela mesma lista, adicionando +1 
    a sua contagem de posição, assim todos os números da lista poderão ser verificados.*/
    for(i=0; i < listaNumeros.length; i++) {
        for(x=i+1; x < listaNumeros.length; x++) {
            /*O "if" estará fazendo a comparação entre os números passados pelo "for", então se existir um número igual
            entre elas, ele será adicionado na listaRepetidos. */
            if(listaNumeros[i] == listaNumeros[x]) {
                listaRepetidos.push(listaNumeros[i]);
            }
        }
    }
    
    /*Então, se não existirem números repetidos, o programa avisára, mas se existirem números repetidos, eles serão impressos
    em uma nova lista, usando join para separá-los. */
    if (listaRepetidos.length === 0) {
        console.log("Não há números repetidos");
    } else {
        console.log("Números repetidos: " + listaRepetidos.join(","));
    }
}

var a = [4, 1, 6, 2, 1, 2];
verificaNumerosRepetidos(a);

var b = [1, 8, 7, 5];
verificaNumerosRepetidos(b);