const loadEditCustomerList = function(editItem) {
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.' + editItem)
  .then(response => response.json())
  .then(function(respJson) {
    let asideContent = document.querySelector('.js--aside-product');
    asideContent.innerHTML = '';
    for (let item of respJson) {
      if (editItem == 'color') {
        asideContent.innerHTML +=
        `<a class="` + editItem + `-list" id="${item.id}" style="background:${item.hexColorValue}">${item.name}</a>`;
      } else {
        asideContent.innerHTML +=
        `<a class="` + editItem + `-list" id="${item.id}">${item.name}</a>`;
      }
    }
    let itemButtons = asideContent.getElementsByTagName('a');
    Array.prototype.forEach.call(itemButtons, function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' +
        productId + '/' + editItem + '/' + button.id,
        {'method': 'PUT'})
        .then(function() {
          loadProduct();
        })
        .catch(error => console.log('Error: ' + error));
      });
    });
  });
};
console.log($('#product-group'));
//product group
$('#product-group').on('click', function() {
  loadEditCustomerList('productgroup');
});
//colors
$('#product-colors').on('click', function() {
  loadEditCustomerList('color');
});
//materials
$('#product-materials').on('click', function() {
  loadEditCustomerList('material');
});
//customer
$('#product-customer').on('click', function() {
  loadEditCustomerList('customer');
});
//Project
$('#product-project').on('click', function() {
  loadEditCustomerList('project');
});
//Outfit
$('#product-outfit').on('click', function() {
  loadEditCustomerList('outfit');
});
//price group
$('#product-price-group').on('click', function() {
  loadEditCustomerList('pricegroup');
});
