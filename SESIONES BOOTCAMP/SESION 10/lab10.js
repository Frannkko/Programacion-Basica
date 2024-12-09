//parte 1

let nombre = "Franklin";
let edad = 21;
let estudiante = true;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", estudiante);

//parte 2

let a = 19;
let b = 19;

let addition = a + b;
let substraction = a - b;
let multiplication = a * b
let division = a / b

console.log("Suma: ",addition);
console.log("Resta: ", substraction);
console.log("Multiplicación: ",multiplication);
console.log("División: ",division);

console.log("\na es igual a b: ", a == b);
console.log("a es diferente de b: ", a!=b);
console.log("a es mayor que b: ", a>b);
console.log("a es menor o igual que b: ", a<=b);

//parte 3

let Adulto = true;
let Permiso = false;
let Nombre = "Franklin";
let Apellido = "Guzmán";

let esMayorDeEdad = Adulto || Permiso;
let tieneLicencia = Adulto && Permiso;
let bienvenida = `¡Hola! ${Nombre} ${Apellido}.`;

console.log(bienvenida);
console.log("Para conducir, necesitas ser mayor de edad y tener licencia.");
console.log("\n¿Eres mayor de edad?: ", Adulto);
console.log("¿Tiene licencia?: ", Permiso);
console.log("¿Cumples uno de los dos requisitos?: ", esMayorDeEdad);
console.log("¿Puedes conducir?: ", tieneLicencia);

//parte 4

let nombreUsuario = prompt("¿Cuál es tu nombre? ");
let edadUsuario = parseInt(prompt("¿Cuál es tu edad? "));
let esEstudiante = prompt("¿Eres estudiante? (sí/no) ").toLowerCase() === "sí";
let mensaje = `\nHola, ${nombreUsuario}.`;
mensaje += ` \nTienes ${edadUsuario} años.`;

if (edadUsuario >= 18) {
 mensaje += " \nEres mayor de edad.";
} else {
 mensaje += " \nEres menor de edad.";
}
if (esEstudiante) {
 mensaje += " Tienes derecho a un descuento por ser estudiante.";
}
console.log(mensaje);