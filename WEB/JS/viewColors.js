$(function() {
    let listColors = function (colors) {
        console.log(colors);
        const colorsElement = document.querySelector("#js--all-colors");
        if (colorsElement === null){
            throw new Error("No Color yet!");
        } else {
        colorsElement.innerHTML = "";
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
    }
    };
    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.color")
        .then(response => response.json())
        .then(json => listColors(json))
        .catch(error => console.log(error));
});
