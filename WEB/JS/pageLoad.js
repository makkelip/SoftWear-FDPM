/*
If you want button to open a specific view to section.
Add class to the button formed like: "button" + <verb> + <target>.
Example: class="js--button-view-project" opens project view form viewProject.html.
And the divs inside sections have to have class="theNameOfTheHTML"
Example: in viewCustomer.html <div class="viewCustomer"> ... </div>
*/

$(document).ready(function(){
  //Home
  $("body").one("click", ".js--button-home", function(){
    $("section").load("index.html #js--home");
  });

  //Select customer
  $("body").one("click", ".js--button-select-customer", function(){
    $("section").load("selectCustomer.html #js--select-customer");
    $.getScript("JS/selectCustomer.js");
  });
  //Create customer
  $("body").one("click", ".js--button-create-customer", function(){
    $("section").load("createCustomer.html #js--create-customer");
    $.getScript("JS/createCustomer.js");
  });

  //Select project
  $("body").one("click", ".js--button-select-project", function(){
    $("section").load("selectProject.html #js--select-project");
    $.getScript("JS/selectProject.js");
  });
  //Create project
  $("body").one("click", ".js--button-create-project", function(){
    $("section").load("createProject.html #js--create-project");
    $.getScript("JS/createProject.js");
  });

  //View colors
  $("body").one("click", ".js--button-view-colors", function(){
    $("section").load("viewColors.html #js--all-colors");
    $.getScript("JS/viewColors.js");
  });

  //Create color
  $("body").one("click", ".js--button-create-colors", function(){
    $("section").load("createColors.html #js--create-colors");
    $.getScript("JS/createColors.js");
  });

  //View materials
  $("body").one("click", ".js--button-view-materials", function(){
    $("section").load("viewMaterials.html #js--all-materials");
    $.getScript("JS/selectMaterial");
  });
  //Create materials
  $("body").one("click", ".js--button-create-materials", function(){
    $("section").load("createMaterials.html #js--create-materials");
    $.getScript("JS/createMaterials.js");
  });
 //Select product
  $("body").one("click", ".js--button-select-product", function(){
    $("section").load("selectProduct.html #js--select-product");
    $.getScript("JS/selectProduct.js");
  });
  //Create product
  $("body").one("click", ".js--button-create-product", function(){
    $("section").load("createProduct.html #js--create-product");
    $.getScript("JS/createProduct.js");
  });

});
