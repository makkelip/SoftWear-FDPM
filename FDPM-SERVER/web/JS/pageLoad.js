/*
If you want button to open a specific view to section.
Add class to the button formed like: "button" + <verb> + <target>.
Example: class="js--button-view-project" opens project view form viewProject.html.
And the divs inside sections have to have class="theNameOfTheHTML"
Example: in viewCustomer.html <div class="viewCustomer"> ... </div>
*/

$(document).ready(function(){
  //Home
  $("body").on("click", ".js--button-home", function(){
    $("section").load("index.html #js--home");
  });

  //Select customer
  $("body").on("click", ".js--button-select-customer", function(){
    $("section").load("selectCustomer.html #js--select-customer");
  });
  //Create customer
  $("body").on("click", ".js--button-create-customer", function(){
    $("section").load("createCustomer.html #js--create-customer");
  });

  //Select project
  $("body").on("click", ".js--button-select-project", function(){
    $("section").load("selectProject.html #js--select-project");
  });
  //Create project
  $("body").on("click", ".js--button-create-project", function(){
    $("section").load("createProject.html #js--create-project");
  });

  //View colors
  $("body").on("click", ".js--button-view-colors",
  function(){
  $("section").load("viewColors.html #js--all-colors");
  });
  //Create color
  $("body").on("click", ".js--button-create-colors",
  function(){
  $("section").load("createColors.html #js--create-colors");
  });

  //View materials
  $("body").on("click", ".js--button-view-materials",
  function(){
  $("section").load("viewMaterials.html #js--all-materials");
  });
  //Create materials
  $("body").on("click", ".js--button-create-materials",
  function(){
  $("section").load("createMaterials.html #js--create-materials");
  });


});