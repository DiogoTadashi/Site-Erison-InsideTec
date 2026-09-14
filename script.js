
document.addEventListener('DOMContentLoaded', () => {
    const elementosAnimados = document.querySelectorAll('.animacao-escondida');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerAnimacao = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.1
    });

    elementosAnimados.forEach(elemento => observerAnimacao.observe(elemento));
});

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