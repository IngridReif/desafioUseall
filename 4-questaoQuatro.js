var a = 3;

var minhaFuncao = function(numero) {
    numero = 9;
    return numero;
}

var novoNumero = minhaFuncao (a);

console.log("novoNumero = " + novoNumero);
console.log("a = " + a);

/*No primeiro console.log, o número que irá aparecer é o "9", já que a variável minha função é uma função, que recebe 
um número qualquer como parâmetro, porém, o o parâmetro número sempre é atribuido "9", retornando o mesmo, independente 
do valor atribuido ao parâmetro.*/
//No segundo console.log, o número que irá aparecer é o "3", por ser o número indicado na variável "a"