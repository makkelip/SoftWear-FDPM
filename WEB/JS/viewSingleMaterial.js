$(function() {
    document.getElementById('products-field').innerHTML = "";
    fetchSingleMaterial(materialId);
});

function fetchSingleMaterial(id) {
    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.material/" + id)
        .then((response) => response.json())
        .then(json => displaySingleMaterial(json));
}


function displaySingleMaterial(json){
    //name
    $("#material-name-field").text(json.name);
    //product related
    for (let i = 0; i< json.productsID.length; i ++){
        console.log(json.productsID[i]);
        fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/" + json.productsID[i])
            .then((response) => response.json())
    .then(response => displayProductRelated(response));
    }
    function displayProductRelated(productJson){
            var previousProduct = document.getElementById('products-field');
            previousProduct.innerHTML += `<p>${productJson.name}</p>`;
        }
}
