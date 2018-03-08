const url = "http://10.114.32.58:8080/";
const path = "FDPM-SERVER/sources/model.product";

$(document).ready(function() {
  $("body").on("click", ".js--button-submit-product", function() {
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
    "name": name,
    "description": description
  }
  fetch(url + path, {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  }).then(result => result.json())
  .then(response => console.log('Success', response))
  .catch(error => console.error(error))
}
