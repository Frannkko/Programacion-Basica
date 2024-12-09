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
    mainText.textContent="El término rock and roll fue popularizado por el DJ Alan Freed en la década de 1950 para describir una nueva mezcla de música que combinaba el rhythm and blues con el country. Sin embargo, la frase en sí ya había aparecido en canciones de blues y góspel desde la década de 1920, refiriéndose originalmente al movimiento rítmico y espiritual. ¡Así nació uno de los géneros más influyentes de la historia! 🎸";
});