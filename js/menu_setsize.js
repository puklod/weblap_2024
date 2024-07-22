{
const header = document.querySelector('header');
const body = document.querySelector('body');

window.addEventListener('resize',setMenuType);
setMenuType();


function setMenuType() {
    if (window.innerWidth >= 750 && !header.classList.contains("big")) {
        bigMenu();
    } else if (window.innerWidth <= 749 && !header.classList.contains("small")) {
        smallMenu();
    }   
}

function bigMenu() {
    body.classList.add("preload");
    header.classList.remove("small");
    header.classList.remove("opened");
    header.classList.remove("closed");
    header.classList.add("big");
    setTimeout(() => body.removeAttribute("class"),50);
}

function smallMenu() {
    body.classList.add("preload");
    header.classList.remove("big");
    header.classList.add("small");
    header.classList.add("closed");
    setTimeout(() => body.removeAttribute("class"),50);
}
}