'use strict'

var respuesta = prompt("Ingrese una letra");


switch(respuesta) {
    case "A":
    case "a":
        alert("La letra es la primera vocal");
break;
case "E":
case "e":
    alert("La letra es la segunda vocal");
    break;
    case "I":
        case "i":
            alert("La letra es la tercera vocal");
    break;
    case "O":
    case "o":
        alert("La letra es la cuarta vocal");
        break;
        case "U":
        case "u":
            alert("La letra es la quinta vocal");
    default:
        alert("La letra no es una vocal");


}