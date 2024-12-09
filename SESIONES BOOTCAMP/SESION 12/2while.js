let numero;
let contador = 0;

// Bucle while para recibir números
while (true) {
  numero = parseInt(prompt("Ingrese un número (ingrese un número negativo para terminar):"));
  if (numero < 0) break;
  contador++;
}

// Pregunta y respuesta
const pregunta2 = "¿Qué sucede si se inicializa el contador con un valor negativo?";
const respuesta2 = "El programa funcionará correctamente porque el contador no afecta la lógica del bucle, que se basa en los valores ingresados.";

console.log(`Se ingresaron ${contador} números positivos.`);
console.log(pregunta2);
console.log(respuesta2);
