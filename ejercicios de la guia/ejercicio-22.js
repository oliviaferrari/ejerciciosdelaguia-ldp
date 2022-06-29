'use strict'

var numero;

for(let i = 1; i <=3; i++ ) {
    numero = parseInt(prompt("Ingrese un número"))
} if(numero % 3 == 0 && numero % 5 == 0 ) {
    alert("El número es múltiplo de 3 y de 5");
} else if(numero % 3 == 0) {
alert("El número es múltiplo de 3") ;
} else if(numero % 5 == 0) {
    alert("El número es múltiplo de 5") ;
    } else {
        alert("El número no es múltiplo de ninguno");  
    }