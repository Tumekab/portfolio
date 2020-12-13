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


 .burger {
    position: absolute;
    cursor: pointer;
    z-index: 3;
    padding: 20px;
    right: 16px;
    top: 0;
  }
  .burger::before {
    position: absolute;
    content: "";
    background-color: #e6e6e6;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    top: 6px;
    left: 8px;
    -webkit-box-shadow: 0px 0px 20px 0 rgba(30, 30, 30, 0.3);
            box-shadow: 0px 0px 20px 0 rgba(30, 30, 30, 0.3);
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
    transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
  }
  .burger-line {
    position: relative;
    display: block;
    width: 25px;
    height: 3px;
    margin: 6px;
    background: rgba(0, 0, 0, 0.85);
  }
  .nav-menu {
    position: absolute;
    height: 0;
    width: 100vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 5vh;
    -ms-grid-rows: 10vh auto 20vw;
        grid-template-rows: 10vh auto 20vw;
    top: 10vh;
    left: 0;
    z-index: 3;
    -webkit-transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
    transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
  }
  .nav-menu::before {
    content: unset;
  }
  .nav-links {
    opacity: 0;
    height: 60%;
    display: -ms-grid;
    display: grid;
    justify-items: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 2em;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
    transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
  }
  .nav-link a {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
  }

   .burger {
    position: absolute;
    cursor: pointer;
    z-index: 3;
    padding: 20px;
    right: 16px;
    top: 0;
  }
  .burger::before {
    position: absolute;
    content: "";
    background-color: #e6e6e6;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    top: 6px;
    left: 8px;
    -webkit-box-shadow: 0px 0px 20px 0 rgba(30, 30, 30, 0.3);
            box-shadow: 0px 0px 20px 0 rgba(30, 30, 30, 0.3);
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
    transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
  }
  .burger-line {
    position: relative;
    display: block;
    width: 25px;
    height: 3px;
    margin: 6px;
    background: rgba(0, 0, 0, 0.85);
  }
  .nav-menu {
    position: absolute;
    height: 0;
    width: 100vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 5vh;
    -ms-grid-rows: 10vh auto 20vw;
        grid-template-rows: 10vh auto 20vw;
    top: 10vh;
    left: 0;
    z-index: 3;
    -webkit-transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
    transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
  }
  .nav-menu::before {
    content: unset;
  }
  .nav-links {
    opacity: 0;
    height: 60%;
    display: -ms-grid;
    display: grid;
    justify-items: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 2em;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
    transition: all 0.75s cubic-bezier(0.79, 0, 0.24, 1) 0s;
  }
  .nav-link a {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
  }





  header class of header
  a href logo
  ul class menu items
  li anchor class of menu item

  css file

  *{
    box-sizing:border-box;
  }

  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem, 2rem;
  }

  .header a {
    text-decoration: none;
    colour: wmy colour;
    font-size: 2rem;
  }

  .menu-items{
    list-style: none;
    display: flex;
    alight-items: centre;

  }

  .menu-items li a{
    font-size: 1rem;
    padding: 0.5em 1em;
    transition: background 0.3s ease-in-out;
  }

  .menu-items li a :hover {
  
  }

  
