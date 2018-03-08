$(function(){
    /*const viewCustomer = document.getElementById("js--view-customer");
    if (viewCustomer === null){
        throw new Error("No Color yet!");
    } else {*/
    const loadCustomer = function (customer) {
        document.getElementById('form-name').textContent = customer.name;
        document.getElementById('form-mail').textContent = customer.mail;
        document.getElementById('form-desc').textContent = customer.description;
    };

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer/" + customerId)
        .then(response => response.json())
        .then(json => loadCustomer(json))
        .catch(error => console.log(error));
    //}
    return false;
});
