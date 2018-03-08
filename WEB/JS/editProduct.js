
$(function(){
    const colorDisplay = (colors) => {
        const colorSideBar = document.querySelector('.aside-content');
        colorSideBar.innerHTML = "";
        for (let color of colors){
            colorSideBar.innerHTML +=  `<a class="color-list" id="${color.id}" style="background:${color.hexColorValue}">${color.name}</a>`;
        }
        var colorSideBars = document.querySelector('.aside-content');
        var colorsChosen = colorSideBars.getElementsByTagName("a");
        Array.prototype.forEach.call(colorsChosen, function(colorChosen){
            colorChosen.addEventListener('click', function(){

                document.getElementById("product-colors-text-field").textContent += `, ${colorChosen.textContent}`;
            })});
    }
        /*
        var colorChosen = document.getElementsByClassName().value;
        colorsChosen.color =
        fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/1/color/2",{
            'method': 'PUT',
            'headers': new Headers({'Content-Type': 'application/json'})
        }).then(result => result.json())
        .then(response => console.log('Success', response))
        .catch(error => console.log('error', error));
        */
    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.color")
        .then(response => response.json())
    .then(json => colorDisplay(json))
    .catch(error => console.log(error));
})