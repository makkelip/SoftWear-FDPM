$(document).ready(function() {
  document.getElementById("js--delete-customer").addEventListener('click', function() {
    deleteCustomer();
    
    //Loads all customers page
    $("section").load("selectCustomer.html #js--select-customer");
    $.getScript("JS/selectCustomer.js");
  });
});

function deleteCustomer() {
  return fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId, {
    'method': 'DELETE'
  })
  .then(response => response.json());
}



/*Add delete button to somewhere in viewCustomer.html page!

Add
$.getScript("JS/deleteCustomer.js");
to line 12 in viewCustomer.js*/
