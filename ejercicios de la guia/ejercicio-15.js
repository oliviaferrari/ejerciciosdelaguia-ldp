'use strict'

var num;

num = parseInt (prompt("Ingrese un numero"));

if (num == 0){
    alert("El numero es cero");
} else{
    if (num % 2 == 0){
    alert("El numero es par");
} else {
    alert("El numero es impar");
}
}