'use strict'

let nombre;
let sexo;
let edad;
let altura;
let contador = 0;

let contadorMujeres = 0;
let contadorMujeresMayores = 0;
let porcentajeMujeresMayores;

let contadorHombres = 0;
let contadorHombresMenores = 0;
let porcentajeHombresMenores;

let acumuladorEdadMujeres = 0;
let acumuladorAlturaHombres = 0;

let promedioHombreTotal;
let promedioMujerTotal;

let edadMin;
let alturaMax;

do {
    contador ++;
    do {
        sexo = prompt("Ingrese su sexo");
    } while(sexo != 'm' && sexo != 'M' && sexo != 'h' && sexo != 'H')

    do {
        edad = parseInt(prompt("Ingrese su edad"));
    } while(isNaN(edad))

    do {
        altura = parseInt(prompt("Ingrese su altura en centimetros"));
    } while(isNaN(edad))

    if(sexo == "m" || sexo == "M" ) {
        acumuladorEdadMujeres += edad;
        contadorMujeres ++;
        if (edad > 25) {
            contadorMujeresMayores ++;
        }
    }
    
    if(sexo == "h" || sexo == "H" ) {
        acumuladorAlturaHombres += altura;
        contadorHombres ++;
        if (edad < 18) {
            contadorHombresMenores ++;
        }
    }
    
 

    if(contador == 1) {
        edadMin = edad;
    } else {
        if(edad < edadMin) {
            edadMin = edad;
        }
    }

    if(contador == 1) {
        alturaMax = altura;
    } else {
        if(altura > alturaMax) {
            alturaMax = altura;
        }
    }
    
} while (confirm("Quiere seguir?"));

porcentajeMujeresMayores = contadorMujeresMayores / contadorMujeres * 100;
porcentajeHombresMenores = contadorHombresMenores / contadorHombres * 100;

promedioMujerTotal = acumuladorEdadMujeres / contadorMujeres;
promedioHombreTotal = acumuladorAlturaHombres / contadorHombres;


document.write("El porcentaje de mujeres mayores es: " + porcentajeMujeresMayores + "%");
document.write("<br>");
document.write("El porcentaje de hombres menores es: " + porcentajeHombresMenores + "%");
document.write("<br>");
document.write("El promedio de edad de las mujeres es: " + promedioMujerTotal);
document.write("<br>");
document.write("El promedio de altura de los hombres es: " + promedioHombreTotal);
document.write("<br>");
document.write("La menor edad es: " + edadMin);
document.write("<br>");
document.write("La altura maxima es: " + alturaMax);

