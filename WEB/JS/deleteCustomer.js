$(document).ready(function() {
  document.getElementById("js--delete-customer").addEventListener('click', function() {
    deleteCustomer();

    //Loads all customers page
    $("section").load("selectCustomer.html #js--select-customer");
    $.getScript("JS/selectCustomer.js");
  });
});

function deleteCustomer() {
  return fetch(url + 'model.customer/' + customerId, {
    'method': 'DELETE'
  })
  .then(response => response.json());
}
