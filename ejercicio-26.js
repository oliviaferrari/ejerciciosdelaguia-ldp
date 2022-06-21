'use strict'

let numero;
let contador = 0;
let acumulador = 0;
let min;
let max;

do{
contador++;
numero = parseInt(prompt("Ingrese el número"));



if(contador % 2 != 0) {
acumulador += numero
}

if (contador == 1){
    min = numero;
    max = numero;

} else {
   if (numero < min)
   min = numero;
} 

if ( numero > max){
    max = numero;
}

 } while (confirm("¿Quiere seguir ingresando números?"))

 document.write(`La suma de todos los valores que se ingresaron  `)