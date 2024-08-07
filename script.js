// script.js
const mensajes = document.querySelectorAll('.mensaje');

mensajes.forEach((mensaje) => {
    mensaje.addEventListener('click', () => {
        const oculto = mensaje.querySelector('.oculto');
        oculto.classList.toggle('mostrar');
    });
});