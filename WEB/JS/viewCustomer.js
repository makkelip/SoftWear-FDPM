$(function(){
    /*const viewCustomer = document.getElementById("js--view-customer");
    if (viewCustomer === null){
        throw new Error("No Color yet!");
    } else {*/
    const loadCustomer = function (customer) {
        document.getElementById('form-name').textContent = customer.name;
        document.getElementById('form-mail').textContent = customer.email;
        document.getElementById('form-desc').textContent = customer.description;
        console.log(customer);

        // Loads the delete customer script
        $.getScript("JS/deleteCustomer.js");

        $('#js--button-edit-customer').click(function() {
            document.getElementById('name-info').innerHTML = `Name:</br><input id="form-name" value='${customer.name}' />`;
            document.getElementById('mail-info').innerHTML = `E-mail:</br><input id="form-mail" value='${customer.email}' />`;
            document.getElementById('desc-info').innerHTML = `Description:</br><textarea id="form-desc" rows="6" cols="70">${customer.description}</textarea>`;

            $('#js--button-edit-customer').hide();
            $('#js--button-save-customer').show();
            console.log(customer);
        });

        $('#js--button-save-customer').click(function() {

            let name = $("#form-name").val();
            let email = $("#form-mail").val();
            let description = $("#form-desc").val();

            putCustomer(name, email,description);
            console.log(name);

            $("section").load("viewCustomer.html #js--view-customer");
            $.getScript("JS/viewCustomer.js");

            /*document.getElementById('name-info').innerHTML = `Name:</br><p id="form-name">${name}</p>`;
            document.getElementById('mail-info').innerHTML = `E-mail:</br><p id="form-mail">${email}</p>`;
            document.getElementById('desc-info').innerHTML = `Description:</br><p id="form-desc">${description}</p>`;

            $('#js--button-edit-customer').show();
            $('#js--button-save-customer').hide();*/
        });
    };

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId)
        .then(response => response.json())
        .then(json => loadCustomer(json))
        .catch(error => console.log(error));
    //}
    return false;
});

function putCustomer(name, email, description) {

  let data = {
    "id": customerId,
    "name": name,
    "email": email,
    "description": description
  }
  console.log(data);

  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId, {
    'method': 'PUT',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  })
    .then(response => console.log('Success', response))
    .catch(error => console.error(error));
}
