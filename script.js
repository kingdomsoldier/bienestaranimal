document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});