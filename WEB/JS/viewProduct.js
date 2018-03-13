const loadProduct = function() {
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' + productId)
  .then(response => response.json())
  .then(function(json) {
    //IMAGE MISSING
    //name
    $('.js--product-name').text(json.name);
    //productGroup
    if (json.productGroup != null) {
      $('.js--product-group').text(json.productGroup.name);
    }
    $('.js--product-colors').empty();
    //colors
    if (json.colors.length > 0) {
      let colorsContainer = document.querySelector('.js--product-colors');
      colorsContainer.innerHTML = '';
      for (let color of json.colors) {
        colorsContainer.innerHTML +=
          `<color id=${color.id} value='${color.hexColorValue}'>
          <div class="view-product-color" style="background:${color.hexColorValue}"></div>
          <div class="view-product-color-name">${color.name}</div>
          </color>`;
      }
    }
    //materials
    if (json.materials.length > 0) {
      let materialsContainer = document.querySelector('.js--product-materials');
      materialsContainer.innerHTML = '';
      for (let material of json.materials) {
        materialsContainer.innerHTML +=
          `<material id=${material.id}>${material.name}</material>`;
      }
    } else {
      $('.js--product-materials').empty();
    }
    if (json.customer != null) {
      $('.js--product-customer').text(json.customer.name);
    } else {
      $('.js--product-customer').text('');
    }
    //project
    if (json.project != null) {
      $('.js--product-project').text(json.project.name);
    } else {
      $('.js--product-project').text('');
    }
    //outfit
    if (json.outfit != null) {
      $('.js--product-outfit').text(json.outfit.name);
    } else {
      $('.js--product-outfit').text('');
    }
    //priceGroup
    if (json.priceGroup != null) {
      $('.js--product-pricegroup').text(json.priceGroup.name);
    } else {
      $('.js--product-pricegroup').text('');
    }
    //description
    if (json.description != null) {
      $('.js--product-description').text(json.description);
    } else {
      $('.js--product-description').text('');
    }
  })
  .catch(error => console.log('Error: ' + error));
};
