

var customerId = ""; 

document.addEventListener("DOMContentLoaded", function (event) {
    
    const url = "http://10.114.32.58:8080/";
    const path = "FDPM-SERVER/sources/model.customer/";
    const id = "";
    
    const loadCustomer = function (customer) {
        document.getElementById('form-name').textContent = customer.name;
        document.getElementById('form-mail').textContent = customer.date;
        document.getElementById('form-desc').textContent = customer.description;
        console.log(customer);
    };
    
    fetch(url+path+id)
        .then(response => response.json())
        .then(json => loadCustomer(json))
        .catch(error => console.log(error));
});

