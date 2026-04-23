function animarRolagem() {
    const rolagemList = document.querySelectorAll('.rolagem');

    rolagemList.forEach(rolagem => {
        const rect = rolagem.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = (windowHeight - rect.top) / rect.height;
        const clamped = Math.max(0, Math.min(1, progress))

        const translateX = -400 * (1 - clamped);

        rolagem.querySelectorAll('img').forEach(img =>{
            img.style.transform = `translate(${translateX}px)`
        });
    });
}

window.addEventListener('scroll', animarRolagem, {passive: true})
animarRolagem()