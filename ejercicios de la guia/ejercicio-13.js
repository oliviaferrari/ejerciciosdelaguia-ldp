'use strict'

var valorhora;
var cantidadhoras;
var años;
var sueldo;
var bono;
var sueldototal;


valorhora = parseInt(prompt("Ingrese el valor de la hora"));
cantidadhoras = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
años = parseInt(prompt("Ingrese cuantos años de antiguedad tiene"));


sueldo = valorhora * cantidadhoras;
bono = (sueldo  * 0,15) * años;
sueldototal = sueldo + bono;

alert(`El sueldo total es: ${sueldototal}`);