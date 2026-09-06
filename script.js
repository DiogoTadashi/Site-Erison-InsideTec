
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