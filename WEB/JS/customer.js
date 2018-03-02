const url = "http://10.114.32.58:8080/";
const path = "FDPM-SERVER/sources/model.customer/ret";

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("createButton").addEventListener("click", function() {
    let form = document.getElementById("formId");
    let name = form.childNodes[3].value;
    let email = form.childNodes[8].value;
    let description = form.childNodes[14].value;
    postCustomer(name,email,description);
    });
});

function postCustomer(name, email, description) {
  let data = {
    "name": name,
    "email": email,
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
