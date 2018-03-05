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
    $("section").load("home.html #js--home");
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
});

/* MARKUS STUFF */
/*
$(document).ready(function(){
  //READY
  //Create customer
  $("body").on("click", ".buttonCreateCustomer", function(){
    $("section").load("createCustomer.html #createCustomer");
  });
  //Select customer
  $("body").on("click", ".buttonSelectCustomer", function() {
    $("section").load("selectCustomer.html #selectCustomer");
  });

  //INCOMPLETE

  //View customer
  $("body").on("click", ".buttonViewCustomer", function() {
    $("section").load("viewCustomer.html #viewCustomer");
  });
  //Create project
  $("body").on("click", ".buttonCreateCustomer", function() {
    $("section").load("createProject.html #createProject");
  });
  //View Project
  $("body").on("click", ".buttonViewProject", function() {
    $("section").load("viewProject.html #viewProject");
  });
});
*/
