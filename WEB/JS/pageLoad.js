/*
If you want button to open a specific view to section.
Add class to the button formed like: 'button' + <verb> + <target>.
Example: class='js--button-view-project' opens project view form viewProject.html.
And the divs inside sections have to have class='theNameOfTheHTML'
Example: in viewCustomer.html <div class='viewCustomer'> ... </div>
*/

$(document).ready(function() {
  const section = $('section');
  const body = $('body');
  //Home
  body.on('click', '.js--button-home', function() {
    if ($('#js--home').length == 0) {
      section.append('index.html #js--home');
    }
  });
  //Select customer
  body.on('click', '.js--button-select-customer', function() {
    if ($('#js--select-customer').length == 0) {
      console.log('load');
      section.load('selectCustomer.html #js--select-customer');
      $.getScript('JS/selectCustomer.js');
    }
  });
  //Create customer
  body.on('click', '.js--button-create-customer', function() {
    if ($('#js--create-customer').length == 0) {
      section.append('createCustomer.html #js--create-customer');
      $.getScript('JS/createCustomer.js');
    }
  });

  //Select project
  body.on('click', '.js--button-select-project', function() {
    if ($('#js--select-project').length == 0) {
      section.load('selectProject.html #js--select-project');
      $.getScript('JS/selectProject.js');
    }
  });
  //Create project
  body.on('click', '.js--button-create-project', function() {
    if ($('#js--create-project').length == 0) {
      section.load('createProject.html #js--create-project');
      $.getScript('JS/createProject.js');
    }
  });

  //View colors
  body.on('click', '.js--button-view-colors', function() {
    if ($('#js--all-colors').length == 0) {
      section.load('viewColors.html #js--all-colors');
      $.getScript('JS/viewColors.js');
    }
  });
  //Create color
  body.on('click', '.js--button-create-colors', function() {
    if ($('#js--create-colors').length == 0) {
      section.load('createColors.html #js--create-colors');
      $.getScript('JS/createColors.js');
    }
  });

  //View materials
  body.on('click', '.js--button-view-materials', function() {
    if ($('#js--all-materials').length == 0) {
      section.load('viewMaterials.html #js--all-materials');
      $.getScript('JS/viewMaterials.js');
    }
  });
  //Create materials
  body.on('click', '.js--button-create-materials', function() {
    if ($('#js--create-materials').length == 0) {
      section.load('createMaterials.html #js--create-materials');
      $.getScript('JS/createMaterials.js');
    }
  });

  //Select product
  body.on('click', '.js--button-select-product', function() {
    if ($('#js--select-product').length == 0) {
      section.load('selectProduct.html #js--select-product');
      $.getScript('JS/selectProduct.js');
    }
  });
  //Create product
  body.on('click', '.js--button-create-product', function() {
    if ($('#js--create-product').length == 0) {
      section.load('createProduct.html #js--create-product');
      $.getScript('JS/createProduct.js');
    }
  });

});
