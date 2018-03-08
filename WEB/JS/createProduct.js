$(document).ready(function() {
  document.getElementById("js--button-submit-product").addEventListener('click', function() {
    let form = document.getElementById("js--form-id-product");
    let name = $("#name").val();
    let description = $("#description").val();
    postProduct(name,description);
    form.reset();
    console.log('clicked');
  });
});

function postProduct(name, description) {
  let data = {
    "name": name
  }
  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.product", {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  }).then(result => result.json())
  .then(response => console.log('Success', response))
  .catch(error => console.error(error))
}
