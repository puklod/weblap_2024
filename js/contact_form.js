{
const FORM_DIV = document.querySelector('#for-offers');

    (() => {
        if(document.URL.includes("?sent")){
            showMessage();
            window.scroll({top: FORM_DIV.getBoundingClientRect().top});
        } else {
            FORM_DIV.append(createForm());
        }
    })()

function showMessage() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    
    span.append("Thank you for contacting us!");
    div.append(span);
    div.classList.add("form-text");
    div.classList.add("centered");

    FORM_DIV.append(div);

    }
    
}

function createForm() {
    let form = createElement('form',{id:"contact-form", action:"php/email.php", method:"post"});
        form.append(createP("Your name and email address*:"));
        form.append(createElement('input',{class:"input centered", name:"name", placeholder:"Name", type:"text", required:""}));
        form.append(createElement('input',{class:"input centered", name:"email", placeholder:"E-mail", type:"email", required:""}));
        form.append(createP("Your message:"));
        form.append(createElement('input',{class:"input centered", name:"subject", placeholder:"Subject", type:"text", required:""}));
        form.append(createElement('textarea',{class:"input", name:"message", placeholder:"Message", rows:"15", required:""}));
        form.append(createElement('input',{class:"submit-button", type:"submit", value:"Send"}));
        form.append(createP("* We store your data only for contact purposes."));
    
    return form;
}

function createElement(type,attributeObject) {
    let element = document.createElement(type);

    for (const attributeList of Object.entries(attributeObject)){
        element.setAttribute(attributeList[0],attributeList[1]);
    }

    return element;
}

function createP(string) {
    let p = document.createElement('p');

    p.append(string);
    p.classList.add("form-text");

    return p;
}