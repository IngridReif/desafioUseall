function verificaNumerosRepetidos (listaNumeros) {
    var listaRepetidos = [];

    for(i=0; i < listaNumeros.length; i++) {
        for(x=i+1; x < listaNumeros.length; x++) {
            if(listaNumeros[i] == listaNumeros[x]) {
                listaRepetidos.push(listaNumeros[i]);
            }
        }
    }
    
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