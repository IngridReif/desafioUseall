var x = 10;
var y = 20;

console.log("Operador Ternário");

x += x == 20 ? x/y : y/x;
y -= y == 10 ? y/x : x/y;

console.log (x);
console.log (y);

/*Na questão, pude ver que tanto "x += x == 20" quanto "y -= y == 10" não estão sendo utilizados como comparação, 
mas como cálculo e que ambas são Operador Ternário. Outra coisa observada, é que a questão originalmente vinha com "int", 
no lugar de "var", tendo que ser modificado, pois no JS não conseguimos usar "int".*/
/*No resultado de "x", após a resolução, ele cai no else "y/x". E no resultado de "y, ele cai no if "y/x".
Isso foi o que consegui obervar, porém não consegui entender o resultado do calculo, que quando colocado
no console.log, "x=12" e "y=19.4".*/
/*Porém, utilizando "if" e "else", pude perceber que entra nas condições corretas e a divisão ocorre corretamente, 
mas não sei o porquê da diferença de resultados utilizando o ternário.*/

console.log("IF e ELSE");

var x = 10;
var y = 20;

if (x += x == 20) {
    x/y;
} else {
    y/x;
}

if (y -= y == 10) {
    y/x;
} else {
    x/y;
}

console.log(x);
console.log(y);