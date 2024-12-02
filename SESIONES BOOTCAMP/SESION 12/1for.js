// Arreglo de números
const numeros = [10, 20, 30, 40, 50];
let sumaTotal = 0;

// Bucle for para calcular la suma total
for (let i = 0; i < numeros.length; i++) {
  sumaTotal += numeros[i];
}

// Pregunta y respuesta
const pregunta1 = "¿Cómo se modifica el código para calcular el promedio de los números?";
const respuesta1 = "Se divide la suma total entre la cantidad de elementos del arreglo.";

console.log(`Suma total: ${sumaTotal}`);
console.log(pregunta1);
console.log(respuesta1);
