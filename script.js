
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

const menuToggle = document.getElementById('menuToggle');
const menuPrincipal = document.getElementById('menuPrincipal');

menuToggle.addEventListener('click', () => {
    menuPrincipal.classList.toggle('aberto');
    const expandido = menuPrincipal.classList.contains('aberto');
    menuToggle.setAttribute('aria-expanded', expandido);
});