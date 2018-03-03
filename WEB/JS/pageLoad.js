/*
If you want button to open a specific view to section.
Add class to the button formed like: "button" + <verb> + <target>.
Example: class="buttonViewProject" opens project view form viewProject.html.
And the divs inside sections have to have class="theNameOfTheHTML"
Example: in viewCustomer.html <div class="viewCustomer"> ... </div>
*/

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
