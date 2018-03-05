/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

document.addEventListener("DOMContentLoaded", function (event) {

    const url = "http://10.114.32.58:8080/";
    const path = "FDPM-SERVER/sources/model.color";

    let listColors = function (colors) {
        const colorsElement = document.querySelector("#js--colors-list");
        colorsElement.innerHTML = "";

        for (let color of colors) {
            colorsElement.innerHTML +=
                `<div class="color-card"> <!-- värikortti-->
                    <div class="color"></div> <!-- väri-->
                    <div class="color-info"> <!--väri-info-->
                        <p class="color-info-name">${color.name}</p>
                        <p class="color-info-pantone">${color.pantone}</p>
                        <p class="color-info-hex">${color.code}</p>
                    </div>
                </div>`;
        }
        console.log(colorsElement);
    };
    
    fetch(url + path)
        .then(response => response.json())
        .then(json => listColors(json))
        .catch(error => console.log(error));
});
