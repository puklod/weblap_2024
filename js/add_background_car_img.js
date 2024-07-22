{
const IMG_DIV = document.querySelector('#background-car-img');
const BODY = document.querySelector('body');

window.addEventListener('scroll', () => {
    let maxScrollHeight = BODY.scrollHeight - window.innerHeight;
    let onePercentage = maxScrollHeight / 100;
    let currentScollPercentage = window.scrollY / onePercentage;

    if(currentScollPercentage > 15) {
        IMG_DIV.style.opacity = 100;
    } else {
        IMG_DIV.style.opacity = 0;
    }
})
}