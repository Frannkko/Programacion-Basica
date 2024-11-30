// Función principal que muestra los resultados en función de la edad y el día seleccionado
function mostrarResultados() {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = ""; // Limpiar resultados anteriores

    // Obtener la edad y el día ingresados por el usuario
    const edad = parseInt(document.getElementById("edad").value);
    const dia = document.getElementById("dia").value;

    // Validar que se haya ingresado una edad válida
    if (isNaN(edad)) {
        resultados.innerHTML = "<p>Por favor, ingresa una edad válida.</p>";
        return;
    }

    // Estructura if, else if y else para verificar la edad
    let mensajeEdad = "";
    if (edad < 18) {
        mensajeEdad = "Eres menor de edad.";
    } else if (edad >= 18 && edad < 65) {
        mensajeEdad = "Eres adulto.";
    } else {
        mensajeEdad = "Eres mayor de 65 años.";
    }
    resultados.innerHTML += `<p>${mensajeEdad}</p>`;

    // Estructura switch para mostrar un mensaje según el día seleccionado
    let mensajeDia = "";
    switch (dia) {
        case "lunes":
            mensajeDia = "Hoy es lunes, inicio de la semana.";
            break;
        case "martes":
            mensajeDia = "Hoy es martes, segundo día de la semana.";
            break;
        case "miércoles":
            mensajeDia = "Hoy es miércoles, mitad de semana.";
            break;
        case "jueves":
            mensajeDia = "Hoy es jueves, se acerca el fin de semana.";
            break;
        case "viernes":
            mensajeDia = "Hoy es viernes, último día laboral para muchos.";
            break;
        case "sábado":
        case "domingo":
            mensajeDia = "Es fin de semana, ¡disfruta tu descanso!";
            break;
        default:
            mensajeDia = "Día no válido.";
    }
    resultados.innerHTML += `<p>${mensajeDia}</p>`;

    // Operador ternario para determinar si el usuario es mayor o menor de edad
    const mensajeTernario = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    resultados.innerHTML += `<p>${mensajeTernario}</p>`;
}
