{
const FORM_DIV = document.querySelector('#for-offers');
const FORM = document.querySelector('#for-offers > form');

    (() => {
        if(document.URL.includes("?sent")){
            showMessage();
            window.scroll({top: FORM_DIV.getBoundingClientRect().top});
        }
    })()

function showMessage() {
    FORM_DIV.removeChild(FORM);

    let div = document.createElement('div');
    let span = document.createElement('span');
    
    span.append("Thank you for contacting us!");
    div.append(span);
    FORM_DIV.append(div);

    }
    
}
