// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        // Capturar los datos
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;

        // Validar los datos
        if (validateInput(name, age, email)) {
            alert('Datos válidos:');
            alert('Datos enviados correctamente.');
            alert(`Nombre: ${name}, Edad: ${age}, Email: ${email}`);
        } else {
            alert('Por favor, verifica que todos los datos sean correctos.');
        }
    });
});

// Función para validar los datos
function validateInput(name, age, email) {
    // Validar nombre
    if (name.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return false;
    }

    // Validar edad
    if (age < 0 || age > 120) {
        alert('La edad debe ser un número entre 0 y 120.');
        return false;
    }

    // Validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, introduce un email válido.');
        return false;
    }

    return true; // Todos los datos son válidos
}
