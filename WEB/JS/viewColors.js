$(function() {
    let listColors = function (colors) {
        console.log(colors);
        const colorsElement = document.querySelector(".color-container-flex");
        colorsElement.innerHTML = "";
        colorsContainner = new Array();
        if (colorsElement === null){
            throw new Error("No Color yet!");
        } else {
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

            colorsContainner.push(color.hexColorValue);
        }
        var colors_display = document.getElementsByClassName('color');
        console.log(colors_display);
        console.log(colorsContainner);
        for (let i = 0; i<colorsContainner.length;i++){
            colors_display[i].style.backgroundColor = colorsContainner[i];
        }
        console.log(colorsElement);
    }
    };
    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.color")
        .then(response => response.json())
        .then(json => listColors(json))
        .catch(error => console.log(error));
});
