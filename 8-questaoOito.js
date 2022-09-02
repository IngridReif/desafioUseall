//A função é feita para que não seja necessário repetir o código toda vez que ele precisar percorrer uma nova lista.
function calculaMedia(lista) {
    //O valor total se iniciará em zero
    var valorTotal = 0; 
    
    /*Inicialmente tanto o i, quanto o valorTotal iniciarão em zero, conforme a lista é percorrida, os valores são
    percorridos e somados*/
    for (i=0; i < lista.length; i++) {
        valorTotal += lista[i];
    } 
    
    /*Na divisão, o valorTotal será dividido pelo tamanho da lista*/ 
    divisao = valorTotal/lista.length; 

    console.log(divisao);
}

// Função com três valores
var lista = [2, 4, 6];
calculaMedia(lista); /*Aqui a função está sendo chamada, com o parâmetro lista, o parâmetro será sustituído dependendo da 
lista que estou passando*/

// Função com nenhum valor
var lista = [0];
calculaMedia(lista);

// Função com vários valores
var lista = [2, 4, 6, 10, 12, 20];
calculaMedia(lista);