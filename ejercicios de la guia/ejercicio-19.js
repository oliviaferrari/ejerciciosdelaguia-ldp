'use strict'

var num1;
var num2;
var operador;
var resultado = 0;

num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese otro numero"));
operador = prompt("Ingrese un operador (+, -, *, /");

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

}