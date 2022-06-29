'use strict'

let nombre;
let nota;
let contadorAlumnos = 0;
let contadorDesaprobados = 0;
let contadorAprobados = 0;
let acumuladorDesaprobados = 0;
let acumuladorAprobados;
let porcentajeAprobados;
let porcentajeDesaprobados;
let promedio;

do{

nombre = prompt("Ingrese el nombre del alumno");

do{
nota = parseInt (prompt("Ingrese la nota del alumno"));
} while (isNaN(nota) || nota < 1 || nota > 10);

if ( nota >= 4) {
contadorAprobados++;
acumuladorAprobados += nota;
} else if (nota < 4){
    contadorDesaprobados ++;
    acumuladorDesaprobados += nota;
}
contadorAlumnos++;


} while (confirm("Desea ingresar algun alumno mas?"));

porcentajeAprobados = (contadorAprobados / contadorAlumnos) *100;
porcentajeDesaprobados = (contadorDesaprobados / contadorAlumnos)*100;
promedio = (acumuladorAprobados = acumuladorDesaprobados) / contadorAlumnos;

document.write(`El porcentaje de alumnnos aprobados es: ${porcentajeAprobados} y el de alumnos desaprobados es: ${porcentajeDesaprobados}  <br> El promedio total de las notas de los alumnos es ${promedio}`)

