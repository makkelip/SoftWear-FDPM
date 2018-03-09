$(document).ready(function() {
  fetchProduct(productId);
});

function fetchProduct(id) {
  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/" + id)
  .then((response) => response.json())
  .then(json => displayProduct(json))
}

function displayProduct(json) {
  //IMAGE MISSING
  //name
  $(".js--product-name").text(json.name);
  //productGroup
  if(json.productGroup != null) {
    $(".js--product-group").text(json.productGroup.name);
  }
  //colors
  if(json.colors.length > 0) {
    let colorsContainer = document.querySelector(".js--product-colors");
    colorsContainer.innerHTML = "";
      for (let color of json.colors) {
      colorsContainer.innerHTML +=
        `<color id=${color.id} value="${color.hexColorValue}">${color.name}</color>`;
    }
  }
  //materials
  if (json.materials.length > 0) {
    let materialsContainer = document.querySelector(".js--product-materials");
    materialsContainer.innerHTML = "";
      for (let material of json.materials) {
      materialsContainer.innerHTML +=
        `<material id=${material.id}>${material.name}</material>`;
    }
  }
  //customer
  if(json.customer != null) {
    $(".js--product-customer").text(json.customer.name);
  }
  //project
  if(json.project != null) {
    $(".js--product-project").text(json.project.name);
  }
  //outfit
  if(json.outfit != null) {
    $(".js--product-outfit").text(json.outfit.name);
  }
  //priceGroup
  if(json.priceGroup != null) {
    $(".js--product-pricegroup").text(json.priceGroup.name);
  }
  //description
  if(json.description != null) {
    $(".js--product-description").text(json.description);
  }
}
//Create method for displaying all colors!!!
//Create method for displaying all materials!!!
