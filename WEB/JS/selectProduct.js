const loadSelectProduct = function() {
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product')
    .then(response => response.json())
    .then(json => addAllProducts(json))
    .catch(error => console.log(error));
};
const productContainer = document.getElementById('js--product-container');
let addProduct = function(productJson) {
  let productCard =
    `<div class="grow product-box js--button-select-product" id="${productJson.id}">
      <div class="product-image">
      <img src="http://www.drawingskill.com/wp-content/uploads/1/T-Shirt-Image-Drawing.jpg">
      </div>
      <div class="product-name">${productJson.name}</div>
      </div>`;
  return productCard;
};

let addAllProducts = function(json) {
  console.log(json);
  productContainer.innerHTML = '';
  for (let product of json) {
    productContainer.innerHTML += addProduct(product);
    $('body').on('click', '#' + product.id, function(event) {
      event.preventDefault();
      if ($('#js--view-product').length == 0) {
        $.get('viewProduct.html', function(data) {
          section.append(data);
          productId = product.id;
          $.getScript('JS/viewProduct.js');
          $.getScript('JS/editProduct2.js', () => loadProduct());
          loadSection($('#js--view-product'));
        });
      } else {
        productId = product.id;
        loadProduct();
        loadSection($('#js--view-product'));
      }
    });
  }
};
