{
let currentImgNumber = 0;
let isMouseOver = false;
const gallery = {
    leftArrow: document.querySelector('#gallery-left-arrow'),
    rightArrow: document.querySelector('#gallery-right-arrow'),
    imgElement: document.querySelector('#gallery-container'),
    imgFilePath: "images/gallery/",
    imgExtension: ".webp",
    size: 5,
    delay: 5000,
};

preload();
addEventListeners(gallery.imgElement);
autoPlay();

function preload() {
    let body = document.querySelector('body');
    let preloadDiv = document.createElement('div');
        preloadDiv.setAttribute("id","gallery-preload");
        
    body.append(preloadDiv);

    for(let i=0; i<gallery.size; i++) {
        let img = document.createElement('img');
            img.setAttribute("src",generateImgFilePath(i+1));
            img.setAttribute("width","1px");
            img.setAttribute("height","1px");
        
        preloadDiv.append(img);
    }

    preloadDiv.remove();
}


function addEventListeners(imgElement) {
    imgElement.addEventListener('mouseover',() => {
        isMouseOver = true;
        gallery.leftArrow.style.opacity = "0.6";
        gallery.rightArrow.style.opacity = "0.6";
    });
    
    imgElement.addEventListener('mouseleave',() => {
        isMouseOver = false;
        gallery.leftArrow.style.opacity = "0";
        gallery.rightArrow.style.opacity = "0";
    });

    gallery.leftArrow.addEventListener('click', stepBackward);
    gallery.rightArrow.addEventListener('click', stepForward);

}

function autoPlay() {
    if(isMouseOver === false){
        stepForward();
    }

    setTimeout(() => {
        autoPlay();
    }, gallery.delay);

}

function stepForward() {
    setCurrentImgNumber(1);
    setBackgroundImage(currentImgNumber);
}

function stepBackward() {
    setCurrentImgNumber(-1);
    setBackgroundImage(currentImgNumber);
}

function setCurrentImgNumber(number) {
    if(currentImgNumber + number > gallery.size) {
        currentImgNumber = 1;
    } else if (currentImgNumber + number < 1) {
        currentImgNumber = gallery.size;
    } else {
        currentImgNumber += number;
    }
}

function setBackgroundImage(imgNumber) {
    gallery.imgElement.style.backgroundImage = "url(" + generateImgFilePath(imgNumber) + ")";
}

function generateImgFilePath(imgNumber) {
    return gallery.imgFilePath + "00" + imgNumber + gallery.imgExtension;
}
}