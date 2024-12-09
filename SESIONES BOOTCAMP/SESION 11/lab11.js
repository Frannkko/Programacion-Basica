let nombreUsuario = prompt("¿Cuál es tu nombre? ");
let calificacion = parseInt(prompt("¿Cuál es tu calificación? "));

let mensaje = `\nHola, ${nombreUsuario}.`;
mensaje += ` \nTu calificación es: ${calificacion}`;

if (calificacion >= 90 && calificacion <=100) {
 mensaje += " \nAprobado con honores.";
} else if(calificacion >= 70 && calificacion < 90){
 mensaje += " \nAprobado.";
}
else if (calificacion < 70 && calificacion >= 0) {
 mensaje += "\nReprobado.";
}
else if(calificacion > 100 || calificacion < 0){
mensaje += "\nIngrese un valor de 0 a 100."
}
alert(mensaje);

//Ejercicio 2

let num = parseInt(prompt("Escribe un número: "));

if(num % 2 ==0){  
    alert(`${num} es PAR`)
    }else{
        alert(`${num} es IMPAR`)
    }

//Ejercicio 3

let compra = parseInt(prompt("¿Cuál es el monto total de su compra? "));
const a = 0.9
let descuento = compra * a;
let mensaje2 = `\nHola, el valor de tu compra es ${compra}`;

if (compra > 100) {
    mensaje2 += `\nSe aplica un descuento del 10%. El monto a pagar ahora es de ${descuento}`;
   } else if(compra <= 100 && compra >=0){
    mensaje2 += "\nNo aplica descuento. Se mantiene el mismo valor total";
   } 
   alert(mensaje2);

//Ejercicio 4

const aleatorio = Math.floor(Math.random()*10) + 1
const intento = parseInt(prompt("Adivina un número del 1 al 10: "))

if (intento==aleatorio){
    alert("\n¡Felicidades! Adivinaste el número")
}else{
    alert(`\nLo siento ingresaste ${intento} y el número era ${aleatorio}`)
}

