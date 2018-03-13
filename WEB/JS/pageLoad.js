/*
If you want button to open a specific view to section.
Add class to the button formed like: 'button' + <verb> + <target>.
Example: class='js--button-view-project' opens project view form viewProject.html.
And the divs inside sections have to have class='theNameOfTheHTML'
Example: in viewCustomer.html <div class='viewCustomer'> ... </div>
*/
const loadSection = function(show) {
  section.children().hide();
  show.show();
};

var section;
var body;

$(document).ready(function() {
  section = $('section');
  body = $('body');

  //Home
  body.on('click', '.js--button-home', function() {
    loadSection($('#js--home'));
  });
  //Select customer
  body.on('click', '.js--button-select-customer', function() {
    if ($('#js--select-customer').length == 0) {
        console.log('customer');
      $.get('selectCustomer.html', function(data) {
        section.append(data);
        $.getScript('JS/selectCustomer.js', () => {loadSelectCustomer(); console.log('cus-js')});
      });
    } else {
      loadSelectCustomer();
    }
    loadSection($('#js--select-customer'));
  });
  //Create customer
  body.on('click', '.js--button-create-customer', function() {
    if ($('#js--create-customer').length == 0) {
      $.get('createCustomer.html', function(data) {
        section.append(data);
        $.getScript('JS/createCustomer.js');
      });
    }
    loadSection($('#js--create-customer'));
  });

  //Select project
  body.on('click', '.js--button-select-project', function() {
    if ($('#js--select-project').length == 0) {
      $.get('selectProject.html', function(data) {
        section.append(data);
        $.getScript('JS/selectProject.js', () => loadSelectProject());
      });
    } else {
      loadSelectProject();
    }
    loadSection($('#js--select-project'));
  });
  //Create project
  body.on('click', '.js--button-create-project', function() {
    if ($('#js--create-project').length == 0) {
      $.get('createProject.html', function(data) {
        section.append(data);
        $.getScript('JS/createProject.js');
      });
    }
    loadSection($('#js--create-project'));
  });

  //View colors
  body.on('click', '.js--button-view-colors', function() {
    if ($('#js--all-colors').length == 0) {
      $.get('viewColors.html', function(data) {
        section.append(data);
        $.getScript('JS/viewColors.js', () => loadViewColors());
      });
    } else {
      loadViewColors();
    }
    loadSection($('#js--all-colors'));
  });
  //Create color
  body.on('click', '.js--button-create-colors', function() {
    if ($('#js--create-colors').length == 0) {
      $.get('createColors.html', function(data) {
        section.append(data);
        $.getScript('JS/createColors.js');
      });
    }
    loadSection($('#js--create-colors'));
  });

  //View materials
  body.on('click', '.js--button-view-materials', function() {
    if ($('#js--all-materials').length == 0) {
      $.get('viewMaterials.html', function(data) {
        section.append(data);
        $.getScript('JS/viewMaterials.js', () => loadMaterials());
      });
    } else {
      loadMaterials();
    }
    loadSection($('#js--all-materials'));
  });
  //Create materials
  body.on('click', '.js--button-create-materials', function() {
    if ($('#js--create-materials').length == 0) {
      $.get('createMaterials.html', function(data) {
        section.append(data);
        $.getScript('JS/createMaterials.js');
      });
    }
    loadSection($('#js--create-materials'));
  });
  //view single material
  body.on('click', '.js--view-material', function() {
    if ($('#js--view-material').length == 0) {
      $.get('viewSingleMaterial.html', function(data) {
        section.append(data);
        $.getScript('JS/viewSingleMaterial.js');
      });
    } else {
      loadSection($('#js--view-material'));
    }
  });
  //Select product
  body.on('click', '.js--button-select-product', function() {
    if ($('#js--select-product').length == 0) {
      $.get('selectProduct.html', function(data) {
        section.append(data);
        $.getScript('JS/selectProduct.js', () => loadSelectProduct());
      });
    } else {
      loadSelectProduct();
    }
    loadSection($('#js--select-product'));
  });
  //Create product
  body.on('click', '.js--button-create-product', function() {
    console.log($('#js--create-product').length);
    if ($('#js--create-product').length == 0) {
      $.get('createProduct.html', function(data) {
        section.append(data);
        $.getScript('JS/createProduct.js');
      });
    }
    loadSection($('#js--create-product'));
  });
});
