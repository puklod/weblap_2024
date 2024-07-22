{
const PAYMENT_ICONS = {
    area: document.querySelector('#payment-icons'),
    imgFilePath: "images/payment/",
    imgExtension: ".png",
    size: 4,
};

(() => {
    let imgElement;

    for (let i = 0; i < PAYMENT_ICONS.size; i++) {
        let src = PAYMENT_ICONS.imgFilePath + "00" + Number(i+1) + PAYMENT_ICONS.imgExtension; 
        imgElement = document.createElement('img');
        imgElement.setAttribute("src",src);
        imgElement.classList.add("icon");

        PAYMENT_ICONS.area.append(imgElement);
    }
})()
}