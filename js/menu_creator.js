const menuItems = ["Prices", "For offers"];
const menu = createMenu(menuItems);
const nav = document.querySelector('nav');

nav.append(menu);


function createMenu(menuItems) {
    const UL = document.createElement('ul');

    for(const itemName of menuItems){
        let li = document.createElement('li');
            li.append(createURL(itemName));
        UL.append(li);
    }

    return UL;
}

function createURL(itemName){
    const HREF = "#" + itemName.toLocaleLowerCase().replace(" ","-");
    let url = document.createElement('a');
    url.setAttribute('href',HREF);
    url.innerHTML = itemName;
    url.classList.add("anchor");

    return url;
}
