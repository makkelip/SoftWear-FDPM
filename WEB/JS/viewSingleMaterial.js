$(document).ready(function() {
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
    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/" + json.productsID)
        .then((response) => response.json())
        .then(response => {$("#products-field").text(response.name)});
}
