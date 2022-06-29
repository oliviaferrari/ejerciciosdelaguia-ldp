'use strict'

var horas;
var valor;
var calculo;

horas = prompt("Ingrese cantidad de horas trabajadas");
valor = prompt("Ingrese el valor por hora");

calculo = horas * valor;
alert("El calculo del sueldo es " + calculo);