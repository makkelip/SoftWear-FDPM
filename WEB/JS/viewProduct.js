var productID = 1;

$(document).ready(function() {
  fetchCustomer(productID);
});

function fetchCustomer(id) {
  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/" + id)
  .then((response) => response.json())
  .then(json => displayCustomer(json))
}

function displayCustomer(json) {
  //IMAGE MISSING
  $(".js--product-name").text(json.name);
  $(".js--product-group").text(json.productGroup.name);
  $(".js--product-colors").text(json.colors[0].name); //now only shows single color
  $(".js--product-materials").text(json.materials[0].name) //only first one
  $(".js--product-customer").text(json.customer.name);
  $(".js--product-project").text(json.project.name);
  $(".js--product-outfit").text(json.outfit.name);
  $(".js--product-pricegroup").text(json.priceGroup.name);
  $(".js--product-description").text(json.description);
}

//Create method for displaying all colors!!!
//Create method for displaying all materials!!!
