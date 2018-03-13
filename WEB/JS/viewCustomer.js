const loadCustomer = () => {
    
    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId)
        .then(response => response.json())
        .then(json => showCustomer(json))
        .catch(error => console.log(error));
    
};

function showCustomer(customer) {
//    document.getElementById('form-name').textContent = customer.name;
//    document.getElementById('form-mail').textContent = customer.email;
//    document.getElementById('form-desc').textContent = customer.description;
    
    document.getElementById('name-info-c').innerHTML = `Name:<br/><p id="form-name-c">${customer.name}</p>`;
    document.getElementById('mail-info').innerHTML = `E-mail:<br/><p id="form-mail">${customer.email}</p>`;
    document.getElementById('desc-info-c').innerHTML = `Description:<br/><p id="form-desc-c">${customer.description}</p>`;
    
    $('#js--button-edit-customer').show();
    $('#js--button-save-customer').hide();

    console.log(customer);

    // Delete customer
    document.getElementById("js--delete-customer").onclick = function() {
        fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId, {
            'method': 'DELETE'
        })
            .then(response => console.log('Success', response))
            .then(result => {
                loadSelectCustomer();
                loadSection($('#js--select-customer'));
            })
            .catch(error => console.error(error));
    };
    
    // Edit customer
    document.getElementById("js--button-edit-customer").onclick = function() {
        document.getElementById('name-info-c').innerHTML = `Name:<br/><input id="form-name-c" value='${customer.name}' />`;
        document.getElementById('mail-info').innerHTML = `E-mail:<br/><input id="form-mail" value='${customer.email}' />`;
        document.getElementById('desc-info-c').innerHTML = `Description:<br/><textarea id="form-desc-c" rows="6" cols="70">${customer.description}</textarea>`;

        $('#js--button-edit-customer').hide();
        $('#js--button-save-customer').show();
        console.log('edit');
    };
    
    // Save customer
    document.getElementById("js--button-save-customer").onclick = function() {

        let name = $("#form-name-c").val();
        let email = $("#form-mail").val();
        let description = $("#form-desc-c").val();

        putCustomer(name, email,description);
        console.log('save');
        
        document.getElementById('name-info-c').innerHTML = `Name:<br/><p id="form-name-c"></p>`;
        document.getElementById('mail-info').innerHTML = `E-mail:<br/><p id="form-mail"></p>`;
        document.getElementById('desc-info-c').innerHTML = `Description:<br/><p id="form-desc-c"></p>`;

        $('#js--button-edit-customer').show();
        $('#js--button-save-customer').hide();
        
        loadCustomer();
        loadSection($('#js--view-customer'));
    };
}

function putCustomer(name, email, description) {

  let data = {
    "id": customerId,
    "name": name,
    "email": email,
    "description": description
  }
  console.log(data);
  console.log("lala" + customerId);

  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId, {
    'method': 'PUT',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  })
    .then(response => console.log('Success', response))
    .catch(error => console.error(error));
}