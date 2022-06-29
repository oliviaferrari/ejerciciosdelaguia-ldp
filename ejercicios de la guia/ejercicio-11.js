'use strict'

var num1, num2, num3, num4; 
var suma;
var promedio;

num1 = parseInt(prompt("Ingrese numero 1"));
num2 = parseInt(prompt("Ingrese numero 2"));
num3 = parseInt(prompt("Ingrese numero 3"));
num4 = parseInt(prompt("Ingrese numero 4"));

suma = num1 + num2 + num3 + num4;
promedio = suma / 4;

alert(`El valor de la suma es: ${suma}, el valor del promedio es: ${promedio}`);