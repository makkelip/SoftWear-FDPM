/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

document.addEventListener("DOMContentLoaded", function (event) {

    const url = "http://10.114.32.58:8080/";
    const path = "FDPM-SERVER/sources/model.color";

    let listColors = function (colors) {
        const colorsElement = document.querySelector("#js--all-colors");
        colorsElement.innerHTML = "";
        console.log(colors);

        for (let color of colors) {
            colorsElement.innerHTML +=
                `<div class="color-card"> <!-- värikortti-->
                    <div class="color"></div> <!-- väri-->
                    <div class="color-info"> <!--väri-info-->
                        <p class="color-info-name">${color.name}</p>
                        <p class="color-info-pantone">${color.pantone}</p>
                        <p class="color-info-hex">${color.hexColorValue}</p>
                    </div>
                </div>`;
            document.getElementsByClassName('color')[color.id-1].style.backgroundColor = color.hexColorValue;
        }
        console.log(colorsElement);
    };
    
    fetch(url + path)
        .then(response => response.json())
        .then(json => listColors(json))
        .catch(error => console.log(error));
});
