const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    document.navLinks.classList.toggle('open');
    document.links.forEach(link =>{
        link.classList.toggle('fade');
    });
});

// let overlay = document.getElementById('burger-menu');

// burgerMenu.addEventListener('click',function(){
//     this.classList.toggle("close");
//     overlay.classList.toggle("overlay");
// });

//add id names to html