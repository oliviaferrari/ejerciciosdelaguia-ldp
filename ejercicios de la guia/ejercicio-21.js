'use strict'

var categoria = parseInt(prompt("Ingrese la categoría a la que pertenece que define el sueldo básico mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000)"))
var horasExtras = parseInt(prompt("Ingrese las horas extras trabajadas"));
var resultado = 0;


switch(categoria){
    case 1:
        resultado = 2000
        break;
    case 2:
        resultado = 3000
        break;
    case 3:
        resultado = 4000
        break;
    default:
    alert("Categoria no existente");
}

if (categoria == 1 && horasExtras > 20) {
    resultado += 500
    alert("Su sueldo final es de " + resultado + " y no supera los $4000");

} else if (categoria == 3 && horasExtras > 30){
    resultado += 1000
    alert("Su sueldo final es de " + resultado + " y supera los $4000")
}
    else (categoria == 2) 
    alert("No tiene bono, su sueldo final es  " + resultado);