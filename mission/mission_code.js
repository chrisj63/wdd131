
let selectElem = document.querySelector('#bgmode');
let logo = document.querySelector('#byuilogo');
let bod = document.querySelector('body');
let contain = document.querySelectorAll('.doccontainer');
console.log(contain);
selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        bod.style.backgroundColor = "#222";
        logo.src = "images/byui-logo-white.png";
        logo.alt = "BYU-Idaho logo-white"
        document.querySelectorAll(".text").forEach(el => el.style.color = "white");
        document.querySelectorAll(".middle").forEach(el => el.style.color = "white");
        contain.forEach(container => container.style.borderColor = 'white');
    } else {
        // code for changes to colors and logo
         bod.style.backgroundColor = "white";
         document.querySelectorAll(".text").forEach(el => el.style.color = "black");
         document.querySelectorAll(".middle").forEach(el => el.style.color = "black");
         /*document.querySelectorAll(".doccontainer").forEach(el => el.style.color = "black"); */
         logo.src = "images/byui-logo-blue.png";
         logo.alt = "BYU-Idaho logo-blue"
         contain.forEach(container => container.style.borderColor = 'black');
    }
}           
                    