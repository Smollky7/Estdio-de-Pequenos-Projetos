// Função de animação ao rolar a página
const projectItems = document.querySelectorAll('.project-item');

const revealOnScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    projectItems.forEach((item) => {
        const offsetTop = item.offsetTop;
        if (scrollTop + window.innerHeight > offsetTop) {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
