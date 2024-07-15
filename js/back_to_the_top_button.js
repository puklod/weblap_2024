{
const BUTTON = document.querySelector('#back-to-the-top-button > i');
const BODY = document.querySelector('html');

(() => {
    if(window.innerWidth <= 749) {
        BUTTON.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })

        window.addEventListener('scroll',showBackToTopButton)
    }
})()

function showBackToTopButton () {
    let maxScrollHeight = BODY.scrollHeight - window.innerHeight;
    let onePercentage = maxScrollHeight / 100;
    let currentScollPercentage = window.scrollY / onePercentage;

    if(currentScollPercentage > 25) {
        BUTTON.style.visibility = "visible";
        BUTTON.style.opacity = "65%";
    } else {
        BUTTON.style.visibility = "hidden";
        BUTTON.style.opacity = "0%";
    }
}
}

