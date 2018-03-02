$(document).ready(function(){
  $(".buttonCreateCustomer").click(function(){
    $(".grid-section").load("createCustomer.html #create");
  });
  $(".buttonSelectCustomer").click(function() {
    $(".section").load("selectCustomer.html #selectCustomer");
  });
});
