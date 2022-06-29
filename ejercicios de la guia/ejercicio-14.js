'use strict'

var valorhora;
var cantidadhoras;
var años;
var seguros;
var segurocaro;
var sueldo;
var bono1;
var bono2;
var bono3;
var sueldototal;
var promedio;

valorhora = parseInt(prompt("Ingrese el valor de la hora"));
cantidadhoras = parseInt(prompt("Ingrese la cantidad de horas trabajadas en el mes"));
años = parseInt(prompt("Ingrese los años de antiguedad"));
seguros = parseInt(prompt("Ingrese la cantidad de seguros vendidos"));
segurocaro = parseInt(prompt("Ingrese el valor del seguro mas caro"));

sueldo = valorhora * cantidadhoras;
bono1 = 0.50 * segurocaro;
bono2 = sueldo * 0.25 * seguros;
bono3 = sueldo * 0.15 * años;

sueldototal = sueldo + bono1 + bono2 + bono3;
promedio = sueldototal / cantidadhoras;

alert(`El sueldo total  es: ${sueldototal} y el valor promedio de la hora del empleado es ${promedio}`);
