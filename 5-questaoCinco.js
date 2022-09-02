var a = {
    nome:"Pedro"
}

var b = {
    nome: a.nome
}

console.info(a===b);
console.info(a.nome===b.nome);

a.nome = "Maria";

console.dir(a);
console.dir(b);

console.info(a.nome===b.nome);

//O "console.info(a===b)" dará "false", pois "a" não é igual a "b", pois está comparando o objeto
//O "console.info(a.nome===b.nome)" da linha 10 dará "true", pois o "a.nome" aparece igual a "b.nome" em sua variável, pois está comparando o seu valor dentro do objeto
//O "console.dir(a);" irá imprimir "Maria", já que na linha 12, o nome de "a" virou "Maria"
/*O  "console.dir(b)" irá imprimir "Pedro", já que na variável "b", o nome "Pedro" que antes era "a", virou "b" e após 
não foi mais alterado o valor da variável "b", ficando a referência de "Pedro."*/
//O "console.info(a.nome===b.nome)" irá ser "false", já que o nome de "a" já não é igual ao nome de "b"