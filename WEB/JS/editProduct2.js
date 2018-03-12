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
        //update relation!!!
        if (editItem == 'material' || editItem == 'color') {
          //update of many to many relation
          fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' +
          productId + '/' + editItem + 's')
          .then(response => response.json())
          .then(function(respJson) {
            console.log(respJson.some(item => item.name === button.innerHTML));
            if (respJson.some(item => item.name === button.innerHTML)) {
              delRelationToManyEntity(editItem, button.id);
            } else {
              changeRelation(editItem, button.id);
            }
          });
        } else {
          //update of one to many relation
          changeRelation(editItem, button.id);
        }
      });
    });
  });
};

const changeRelation = function(editItem, itemId) {
  console.log(editItem + ' ' +  itemId);
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' +
  productId + '/' + editItem + '/' + itemId,
  {'method': 'PUT'})
  .then(function() {
    loadProduct();
  })
  .catch(error => console.log('Error: ' + error));
};

const delRelationToManyEntity = function(editItem, itemId) {
  console.log(editItem + ' ' +  itemId);
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' +
  productId + '/d' + editItem + '/' + itemId,
  {'method': 'PUT'})
  .then(function() {
    loadProduct();
  })
  .catch(error => console.log('Error: ' + error));
};

//name
$('.js--button-edit-product-name').on('click', function() {
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' +
  productId + '/name/' + $('.js--name-edit-product-name').val(), {
    'method': 'PUT'
  })
  .then(function() {
    $('.js--edit-product-name').toggle();
    $('.js--product-name').toggle();
    loadProduct();
  })
  .catch(error => console.log('Error: ' + error));
});

$('#product-name').on('click', function() {
  if ($('.js--edit-product-name').is(':hidden')) {
    $('.js--name-edit-product-name').val($('.js--product-name').text());
    $('.js--product-name').toggle();
    $('.js--edit-product-name').toggle();
  }
});
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
//description
$('.js--button-edit-product-description').on('click', function() {
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' +
  productId + '/description/' + $('.js--description-edit-product-description').val(), {
    'method': 'PUT'
  })
  .then(function() {
    $('.js--edit-product-description').toggle();
    $('.js--product-description').toggle();
    loadProduct();
  })
  .catch(error => console.log('Error: ' + error));
});

$('#product-desc').on('click', function() {
  if ($('.js--edit-product-description').is(':hidden')) {
    $('.js--description-edit-product-description').val($('.js--product-description').text());
    $('.js--product-description').toggle();
    $('.js--edit-product-description').toggle();
  }
});
