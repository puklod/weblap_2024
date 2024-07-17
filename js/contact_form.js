{
const FORM_DIV = document.querySelector('#for-offers');
const FORM = document.querySelector('#for-offers > form');

    (() => {
        if(document.URL.includes("?sent")){
            setMessage();
            window.scroll({top: FORM_DIV.getBoundingClientRect().top});
        } else {
            createForm();
        }
    })()

function setMessage() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    
    span.append("Thank you for contacting us!");
    div.append(span);
    FORM_DIV.append(div);
}

function createForm () {
    let form = elementCreator("form",{id:"contact-form",action:"php/email.php",method:"post"});
        form.append(createP("Your name and email address*:"));
        form.append(elementCreator("input",{class:"input text-center", name:"name",  placeholder:"Name",  type:"text", required:""}));
        form.append(elementCreator("input", {class:"input text-center", name:"email", placeholder:"E-mail", type:"email", required:""}));
        form.append(createP("Your message:"));
        form.append(elementCreator("input",{class:"input text-center", name:"subject", placeholder:"Subject", type:"text", required:""}));
        form.append(elementCreator("textarea",{class:"input", name:"message", placeholder:"Message", rows:"15", required:""}));
        form.append(elementCreator("input",{type:"submit", value:"Send"}));
        form.append(createP("* We store your data only for contact purposes."));

    FORM_DIV.append(form);

}

function createP(string) {
    let p = document.createElement("p");
    p.append(string);

    return p
}

function elementCreator(type, attributeObject) {
    let element = document.createElement(type);

    for (const attributeList of Object.entries(attributeObject)){
        element.setAttribute(attributeList[0],attributeList[1]);
    }

    return element
}
    
}
