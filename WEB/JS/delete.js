$(document).ready(function() {

  document.getElementById("js--delete-customer").addEventListener('click', function() {
  alert("trying to delete " + customerId);
  deleteCustomer();
  });

  
});

function deleteCustomer() {
  return fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId, {
    'method': 'DELETE'
  })
  .then(response => response.json());
}
