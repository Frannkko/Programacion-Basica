// Función para calcular el precio de venta
function calcularPrecio() {
    const costo = parseFloat(document.getElementById("costo").value);
    const tipo = document.getElementById("tipo").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Verificar que el costo sea un número válido y mayor a cero
    if (isNaN(costo) || costo <= 0) {
        resultado.innerHTML = "<p>Por favor, ingresa un costo válido y mayor a cero.</p>";
        return;
    }

    // Declarar la variable para la utilidad
    let utilidad;

    // Estructura switch para determinar la utilidad según el tipo de producto
    switch (tipo) {
        case "electronico":
            utilidad = 30;
            break;
        case "ropa":
            utilidad = 50;
            break;
        case "alimentos":
            utilidad = 20;
            break;
        case "otros":
            utilidad = 40;
            break;
        default:
            utilidad = 0;
    }

    // Calcular el precio de venta
    const precioVenta = costo + (costo * utilidad / 100);

    // Usar operador ternario para evaluar si el precio es alto o bajo
    const mensajePrecio = precioVenta > 500 ? "El precio de venta es alto." : "El precio de venta es bajo.";

    // Mostrar los resultados en el HTML
    resultado.innerHTML = `
        <p>Costo: $${costo.toFixed(2)}</p>
        <p>Tipo de producto: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</p>
        <p>Utilidad aplicada: ${utilidad}%</p>
        <p>Precio de venta: $${precioVenta.toFixed(2)}</p>
        <p>${mensajePrecio}</p>
    `;
}
