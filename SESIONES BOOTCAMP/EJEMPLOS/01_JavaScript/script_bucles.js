// Función principal que ejecutará los bucles y mostrará los resultados
function ejecutarBucles() {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = ""; // Limpiar resultados anteriores

    // Bucle for
    let resultadoFor = "Bucle for: ";
    for (let i = 0; i < 5; i++) {
        resultadoFor += i + " ";
    }
    resultados.innerHTML += `<p>${resultadoFor}</p>`;

    // Bucle while
    let resultadoWhile = "Bucle while: ";
    let i = 0;
    while (i < 5) {
        resultadoWhile += i + " ";
        i++;
    }
    resultados.innerHTML += `<p>${resultadoWhile}</p>`;

    // Bucle do...while
    let resultadoDoWhile = "Bucle do...while: ";
    i = 0;
    do {
        resultadoDoWhile += i + " ";
        i++;
    } while (i < 5);
    resultados.innerHTML += `<p>${resultadoDoWhile}</p>`;

    // Bucle for...in
    const objeto = { a: 1, b: 2, c: 3 };
    let resultadoForIn = "Bucle for...in: ";
    for (const clave in objeto) {
        resultadoForIn += `${clave}:${objeto[clave]} `;
    }
    resultados.innerHTML += `<p>${resultadoForIn}</p>`;

    // Bucle for...of
    const arreglo = [10, 20, 30];
    let resultadoForOf = "Bucle for...of: ";
    for (const valor of arreglo) {
        resultadoForOf += valor + " ";
    }
    resultados.innerHTML += `<p>${resultadoForOf}</p>`;
}
