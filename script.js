//Define Variable 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

//To add bx and active class on navbar 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//To remove navbar when scroll 
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}