var acordeon__arrow = document.getElementById("nav__hamburguer");
const nav = document.querySelector('nav');

nav__hamburguer.addEventListener('click', () => {
    var nav__attributes = nav__hamburguer.getAttribute("aria-expanded");
    if (nav__attributes === "true") {
        nav.classList.remove('fondo__transparente');
        nav.classList.add('fondo__negro');
    } else {
        nav.classList.add('fondo__transparente');
        nav.classList.remove('fondo__negro');
    }
});