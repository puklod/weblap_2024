const navBar = document.querySelector('#navbar');
const body = document.querySelector('body');

window.addEventListener('resize',setMenuType);
setMenuType();


function setMenuType() {
    body.classList.add("preload");

    if (window.innerWidth >= 750) {
        bigMenu();
    } else {
        smallMenu();
    }

    setTimeout(() => body.removeAttribute("class"),50);
}

function bigMenu() {

    navBar.classList.remove("small");
    navBar.classList.remove("opened");
    navBar.classList.remove("closed");
    navBar.classList.add("big");
}

function smallMenu() {
    navBar.classList.remove("big");
    navBar.classList.add("small");
    navBar.classList.add("closed");
}
