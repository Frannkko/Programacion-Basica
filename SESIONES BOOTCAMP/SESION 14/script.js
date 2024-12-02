// Seleccionar elementos del DOM
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Alternar clase "active" para mostrar/ocultar el menú
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const button = document.getElementById('change-text-btn');
const mainText = document.getElementById('main-text');

button.addEventListener('click', function() {
    mainText.textContent="The text has been changed! Now you have dynamic content.";
});