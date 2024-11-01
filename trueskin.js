const toggle = document.querySelector('.menu_togglebtn');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});