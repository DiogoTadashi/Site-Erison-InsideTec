const elementosAnimados = document.querySelectorAll('.animacao-escondida');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aparecer');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px 100px 0px'
});

elementosAnimados.forEach(el => observer.observe(el));

function ajustarPaddingHeader() {
    const header = document.querySelector('header');
    const altura = header.offsetHeight;
    document.body.style.paddingTop = altura + 'px';
}

window.addEventListener('load', ajustarPaddingHeader);

window.addEventListener('resize', ajustarPaddingHeader);

const menuToggle = document.getElementById('menuToggle');
const menuPrincipal = document.getElementById('menuPrincipal');

menuToggle.addEventListener('click', () => {
    menuPrincipal.classList.toggle('aberto');
    const aberto = menuPrincipal.classList.contains('aberto');
    menuToggle.setAttribute('aria-expanded', aberto);

    ajustarPaddingHeader();
});