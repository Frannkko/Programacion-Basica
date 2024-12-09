const contraseñaCorrecta = "1234";
let contraseñaIngresada;

// Bucle do...while para validar la contraseña
do {
  contraseñaIngresada = prompt("Ingrese la contraseña:");
} while (contraseñaIngresada !== contraseñaCorrecta);

// Pregunta y respuesta
const pregunta3 = "¿Por qué se usa un bucle `do...while` en este caso en lugar de `while`?";
const respuesta3 = "Porque se debe ejecutar al menos una vez la solicitud de contraseña antes de comprobar si es correcta.";

console.log("Contraseña correcta ingresada.");
console.log(pregunta3);
console.log(respuesta3);
