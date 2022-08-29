//O == irá comparar apenas o resultado, independente do tipo do dado.
//O === além de comparar o resultado, irá identificar o tipo.
//Ex:

    var a = "1";
    var b = 1;

    console.log (a == b);
    console.log (a === b);

// No "==" ele apenas comparou os valores, então o resultado será "true", mesmo um sendo string e o outro número.
//No "===" ele comparou o tipo e o valor, imprimindo "false", pois os dois não são iguais.