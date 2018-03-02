/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

document.addEventListener("DOMContentLoaded", function (event) {

    const customerInput = document.querySelector("#formId");
    const jsonOutput = document.querySelector("#output-area");
    let customerData = {};

    // Temporary json server, which will be replaced after backend server has been developed
    const url = "https://adm-rest.herokuapp.com/products";
    
    customerInput.addEventListener("input", function () {
        customerData.name = customerInput.querySelector('input[name="name"]').value;
        customerData.email = customerInput.querySelector('input[name="email"]').value;
        customerData.description = customerInput.querySelector('#description').value;

        jsonOutput.innerHTML = "Data to submit: " + JSON.stringify(customerData);
    });
    
    const createButton = document.querySelector("#createButton");
    createButton.addEventListener("click", function () {
        const init = {
            method: "POST",
            body: JSON.stringify(customerData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        jsonOutput.innerHTML = "<b>Now posting ...</b>";

        fetch(url, init)
            .then(response => response.json()) 
            .then(json => (jsonOutput.textContent = "Product saved: " + JSON.stringify(json)))
            .catch(error => (jsonOutput.textContent = "Fetch crashed due to " + error));
    });
});
