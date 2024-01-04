let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

sr.reveal('.hero-text', { delay: 200 });
sr.reveal('.hero-img', { delay: 400 });
sr.reveal('.icons', { delay: 600 });
sr.reveal('.scroll-down', { delay: 200 });

