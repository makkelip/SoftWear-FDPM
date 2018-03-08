
document.getElementById("js--button-submit-customer").addEventListener('click', function() {
    let name = $("#name").val();
    let email = $("#email").val();
    let description = $("#description").val();

    postCustomer(name,email,description);
    console.log('clicked');
});


function postCustomer(name, email, description) {

  let data = {
    "name": name,
    "email": email,
    "description": description
  }

  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer", {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  })
      .then(result => result.json())
      .then(response => console.log('Success', response))
      .catch(error => console.error(error));
}
