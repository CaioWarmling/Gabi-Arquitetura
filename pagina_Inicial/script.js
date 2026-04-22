// Menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('aberto');
        menuToggle.classList.toggle('aberto');
    });

    document.querySelectorAll('nav ul a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('aberto');
            menuToggle.classList.remove('aberto');
        });
    });
}

function animarRolagem() {
    const rolagemList = document.querySelectorAll('.rolagem');

    rolagemList.forEach(rolagem => {
        const rect = rolagem.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = (windowHeight - rect.top) / rect.height;
        const clamped = Math.max(0, Math.min(1, progress));

        const translateX = -400 * (1 - clamped);

        rolagem.querySelectorAll('img').forEach(img => {
            img.style.transform = `translateX(${translateX}px)`;
        });
    });
}

window.addEventListener('scroll', animarRolagem, { passive: true });
animarRolagem();

function enviar(event) {
    const nome = document.querySelector('input').value;
    const mensagem = document.querySelector('textarea').value;
    const telefone = '5548999346996';

    const texto = `Tudo bem? Me chamo ${nome}, ${mensagem}`
    const msgCompactada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgCompactada}`

    window.open(url, '_blank')
    
}
