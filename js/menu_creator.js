{
const menuItems = ["Prices", "For offers", "Costumer service"];
const menu = createMenu(menuItems);
const nav = document.querySelector('nav');

nav.append(menu);


function createMenu(menuItems) {
    const DIV = document.createElement('div');
    DIV.setAttribute("id","nav-links")

    for(const itemName of menuItems){
        let span = document.createElement('span');
            span.append(createURL(itemName));
        DIV.append(span);
    }

    return DIV;
}

function createURL(itemName){
    const HREF = "#" + itemName.toLocaleLowerCase().replace(" ","-");
    let url = document.createElement('a');
    url.setAttribute('href',HREF);
    url.innerHTML = itemName;
    url.classList.add("anchor");

    return url;
}
}