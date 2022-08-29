var a = 3;

var minhaFuncao = function(numero) {
    numero = 9;
    return numero;
}

var novoNumero = minhaFuncao (a);

console.log("novoNumero = " + novoNumero);
console.log("a = " + a);

//No primeiro console.log, o número que irá aparecer é o "9", já que na função o número dado a variável minhaFuncao é "9"
//No segundo console.log, o número que irá aparecer é o "3", por ser o número indicado na variável "a"