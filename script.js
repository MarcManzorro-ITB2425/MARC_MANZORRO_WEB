// Intersection Observer para animaciones

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Simulación envío formulario (SPA UX premium)
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const button = form.querySelector("button");
    button.textContent = "Enviando...";
    button.disabled = true;

    setTimeout(() => {
        button.textContent = "Mensaje Enviado";
        button.style.background = "#00ff99";
        form.reset();
    }, 1500);
});