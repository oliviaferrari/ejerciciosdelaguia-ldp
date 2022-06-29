'use strict'

var num;

num = parseInt (prompt("Ingrese un numero"));

if (num % 3 == 0 && num % 5 == 0){
    alert("El numero es multiplo de 3 y 5");
} else if (num % 5 == 0) {
    alert("El numero es multiplo de 5")
} else if (num % 3 == 0) {
    alert("El numero es multiplo de 3");
}
else{
    alert("El numero no es multiplo de ninguno");
}