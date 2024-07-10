const NAVICON = document.querySelector('#navicon');
const NAVBAR = document.querySelector('#navbar');
const MENUUL = document.querySelector('nav > ul');

NAVICON.addEventListener('click',openCloseMenu);

(() => {
    for (const LI of MENUUL.childNodes) {
        LI.addEventListener('click',openCloseMenu);
    }
})()

function openCloseMenu() {
    if(window.innerWidth <= 749) {
        if (NAVBAR.classList.contains("closed")) {
            NAVBAR.classList.remove("closed");
            NAVBAR.classList.add("opened");
        } else {
            NAVBAR.classList.remove("opened");
            NAVBAR.classList.add("closed");
        }
    }
}