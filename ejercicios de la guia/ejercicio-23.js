var extremomenor = parseInt(prompt ("Ingrese el extremo menor"))
var extremomayor = parseInt(prompt ("Ingrese el extremo mayor"))
var numero;
if (extremomayor - extremomenor >= 5){
    do {
        numero = parseInt(prompt ("Ingrese un numero"))
        if ( numero >= extremomenor && numero <= extremomayor) {
            if (numero % 2 == 0) {
                document.write(`<p>El numero ${numero} es par</p>`)
            } else {
                document.write(`<p>El numero ${numero} no es par</p>`)
            }
        } else {
            if (numero % 2 != 0) {
                document.write(`<p>El numero ${numero} es impar</p>`)
            } else {
                document.write(`<p>El numero ${numero} no es impar</p>`)
            }
        }
    } while (confirm("quieres continuar poniendo valores?")); 
}else {   
    alert ("Tus rangos tienen una diferencia inferior a 5 numeros");
}