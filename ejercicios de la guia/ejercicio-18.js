'use strict'

var num;
var rangomax;
var rangomin;

rangomin = parseInt(prompt("Ingrese el extremo menor de un rango numerico"));
rangomax = parseInt(prompt("Ingrese el extremo mayor de un rango numerico"));

if (rangomin+5 <= rangomax){
num = parseInt(prompt("Ingrese un numero"));

if(num >= rangomin && rangomax) {
    if (num % 2 == 0){
        alert("El numero esta en rango y es par");
    } else {
        alert("El numero esta en rango pero no es par");
    }
} else {
    if (num % 2 != 0){
        alert("El numero no esta en rango y es impar");
    } else {
        alert("El numero no esta en rango y no es impar");
    }
}


} else {
    alert("Los rangos tienen una diferencia inferior a 5 numeros");
}
