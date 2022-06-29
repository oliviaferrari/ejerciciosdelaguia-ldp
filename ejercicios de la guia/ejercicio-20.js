'use strict'

var lado1;
var lado2;
var lado3;

lado1 = parseInt(prompt("Ingrese un lado de un triangulo"));
lado2 = parseInt(prompt("Ingrese el segundo lado de un triangulo"));
lado3 = parseInt(prompt("Ingrese el tercero lado de un triangulo"));

if (lado1 == lado2 == lado3){
    alert("El triángulo es equilatero");
} else {
    if ( lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {
        alert("El triangulo es isoceles");
} else {
    alert("El triangulo es escaleno");
}
}