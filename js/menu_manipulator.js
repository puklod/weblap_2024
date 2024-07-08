const NAVBAR = document.querySelector('#navbar');
const UL = document.querySelector('nav > ul');

setMenuType();
window.addEventListener('resize',setMenuType);

function setMenuType() {
    if (window.outerWidth >= 750) {
        bigMenu();
    } else {
        smallMenu();
    }
}

function bigMenu() {
    NAVBAR.classList.remove("small");
    NAVBAR.classList.add("big");
}

function smallMenu() {
    const NAVICON = document.querySelector('#navicon')

    NAVBAR.classList.remove("big");
    NAVBAR.classList.add("small");
    setClosedClass();
    NAVICON.addEventListener('click',openCloseMenu)
    
}


function setClosedClass() {
    for (const LI of UL.childNodes) {
        LI.classList.add("closed");   
    }
}

function openCloseMenu() {
    for (const LI of UL.childNodes) {
        if(LI.classList.contains("closed")){
            LI.classList.remove("closed");
            LI.classList.add("opened");
            }else {
            LI.classList.remove("opened");
            LI.classList.add("closed");
            }
    }
}