const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

//event listener
menu.addEventListener('click', mobileMenu);

// Time Stamp - 1:46:15 (adding JS Smooth Scroll)