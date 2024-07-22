{
const BODY = document.querySelector('body');
const NAVICON = document.querySelector('#navicon');
const HEADER = document.querySelector('header');

NAVICON.addEventListener('click',openMenu);
window.addEventListener('resize', ()=> {
        if(window.innerWidth >= 750) {
                BODY.removeEventListener('click',closeMenu);
        }
})

function openMenu() {
    if(window.innerWidth <= 749 && HEADER.classList.contains("closed")) {
            HEADER.classList.remove("closed");
            HEADER.classList.add("opened");
            BODY.style.overflow = "hidden";
            setTimeout(() => BODY.addEventListener('click',closeMenu),50);
    }
}

function closeMenu() {
        HEADER.classList.remove("opened");
        HEADER.classList.add("closed");
        BODY.removeAttribute("style");
        BODY.removeEventListener('click',closeMenu);
}
}