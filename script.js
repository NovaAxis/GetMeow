document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация иконок Lucide
    // Эта функция ищет все теги <i> с атрибутом data-lucide и превращает их в SVG
    lucide.createIcons();


    // 2. Анимация фоновых частиц (Эмодзи)
    const container = document.getElementById('particles-container');
    // Эмодзи для фона, как вы просили оставить
    const icons = ['🐾', '🐈', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🐱', '🐈', '⬛'];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.innerText = icons[Math.floor(Math.random() * icons.length)];
        particle.style.left = Math.random() * 100 + 'vw';

        const size = Math.random() * 15 + 10;
        particle.style.fontSize = size + 'px';

        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(particle);
    }
});