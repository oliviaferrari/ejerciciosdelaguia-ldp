'use strict'

var num1;
var num2;
var operador;
var resultado;

do {
num1 = parseInt (prompt("Ingrese un número"));
   num2 = parseInt (prompt("Ingrese otro número"));
    operador = prompt("Ingrese el operador deseado");  
switch(operador){
    case '+':
        resultado = num1 + num2;
        alert(resultado);
        break;
    case '-':
        resultado = num1 - num2;
        alert(resultado);
        break;
    case '*':
        resultado = num1 * num2;
        alert(resultado);
        break;
    case '/':        
        resultado = num1 / num2;
        alert(resultado);
    default:
        alert("Operador invalido");
document.write(resultado)
} 
} while (confirm("Desea hacer otra operacion?"))