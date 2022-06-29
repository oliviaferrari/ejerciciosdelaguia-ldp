'use strict';

var diametro;
var perimetro;
var area;
var radio;
var pi = 3.1416;

diametro = parseInt(prompt("Cual es el diametro de un circulo?"));

radio = diametro / 2;

perimetro = 2 * pi * radio;

area =  pi * radio**2;

alert(`El valor del diametro es: ${diametro}, el valor del perímetro es: ${perimetro}, el valor del area es: ${area}`);