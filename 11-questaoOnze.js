var saldo = 110;
var notasDez = 10;
var notasVinte = 20;
var notasCinquenta = 50;
var notasCem = 100;

//A função está debitando o valor sacado, do valor total do saldo
function debitaSaldo(valor) {
    saldo -= valor;
    return saldo;  
}

//A função está sacando o valor passado para ela
function sacar(valor) {
    //Caso não haja saldo suficiente, não poderá estar sacando
    if (valor > saldo) {
       console.log("Saldo insuficiente.");
    } else {
        /*Se conseguir sacar, entrará no switch, quando o valor passado na função sacar, for de um dos "case", aquele 
        case será impresso com as notas que foram sacadas, sempre visando passar o mínimo de notas possível.
        Esse foi o único método que consegui fazer, dentro do conhecimento que tenho, o código fica engessado, já que 
        o programa conseguirá entregar as notas apenas se o sacar for passado até 100. */
        switch (valor) {
            case 10:
                console.log(notasDez);
                debitaSaldo(valor);
                break;
            case 20:
                console.log(notasVinte);
                debitaSaldo(valor);
                break;
            case 30:
                console.log(notasDez, notasVinte);
                debitaSaldo(valor);
                break;
            case 40:
                console.log(notasVinte, notasVinte);
                debitaSaldo(valor);
                break;
            case 50:
                console.log(notasCinquenta);
                debitaSaldo(valor);
                break;
            case 60:
                console.log(notasDez, notasCinquenta);
                debitaSaldo(valor);
                break;
            case 70:
                console.log(notasVinte, notasCinquenta);
                debitaSaldo(valor);
                break;
            case 80:
                console.log(notasCinquenta, notasDez, notasVinte);
                debitaSaldo(valor);
                break;
            case 90:
                console.log(notasCinquenta, notasVinte, notasVinte);
                debitaSaldo(valor);
                break;
            case 100:
                console.log(notasCem);
                debitaSaldo(valor);
                break;
            default:
                console.log("Não é possível compor este valor.")
        }
    } 
}

sacar(30);
sacar(80);