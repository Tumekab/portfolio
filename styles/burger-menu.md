.hamburger{
    position: relative;

}

.hamburger,

.hamburger::before

.hamburger::after{
    width: 2rem,
    height: 3px;
    background: var(--cream);

    transition: transform 250ms ease-in-out;
}

media queries
Mobiles
320px
480px
640px

Tablets
768px
1024px - landscape

Desktops
1124px


@media screen and (max-width: 768px){
    menu to display none
}

javascript
function toggleClass(){
    let menu = document.querySelector(class name);
    menu.classList.toggle("open");
    
}