const url = "http://10.114.32.58:8080/";
const path = "FDPM-SERVER/sources/model.customer";

$(document).ready(function(){
    $("body").on("click", ".js--button-submit-customer", function() {
        console.log('clicked');
        let name = $("#name").val();
        let email = $("#email").val();
        let description = $("#description").val();
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
