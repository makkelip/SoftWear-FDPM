/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

$(function() {
    
    let listCustomers = function (customers) {
        const customersElement = document.getElementById("js--customers-list");
        customersElement.innerHTML = "";

        for (let customer of customers) {
            customersElement.innerHTML +=
                `<a href="#" class="boxitem" id="${customer.id}">
                <div>Company name:<br> ${customer.name}</div>
                <div>Email:<br> ${customer.email}</div>
                <div>Description:<br> ${customer.description}</div></a>`;
            console.log(customer.id);
        }
        for (let customer of customers) {
            //document.getElementById(""+customer.id).onclick = () => {
            $("body").on("click", "#" + customer.id, function(){
                $("section").load("viewCustomer.html #js--view-customer");
                customerId = customer.id;
                $.getScript("JS/viewCustomer.js");
            });
        }
        console.log(customersElement);
    };
    
    let firstItem = 0;
    let lastItem = 2;

    const hide = item => item.style.display = "none";
    const show = item => item.style.display = "block";

    const showItems = () => {

        const items = $(".boxitem");

        if (items.length > 3) {
            show(document.getElementById('left-button'));
            show(document.getElementById('right-button'));

            let activeItems = [];
            for (let i = firstItem; i <= lastItem; i++) {
                activeItems.push(items[i]);
            }

            const next = () => {
                console.log("clicked");
                if (lastItem < items.length - 1) {
                    activeItems.push(items[lastItem += 1]);
                    activeItems.shift();
                    firstItem++;
                    showItems();
                }
            };

            const prev = () => {
                console.log("clicked");
                if (firstItem > 0) {
                    activeItems.pop();
                    activeItems.unshift(items[firstItem -= 1]);
                    lastItem--;
                    showItems();
                }
            };

            document.getElementById('left-button').onclick = prev;
            document.getElementById('right-button').onclick = next;

            [].forEach.call(items, hide);
            activeItems.forEach(show);
        }
    };

    hide(document.getElementById('left-button'));
    hide(document.getElementById('right-button'));

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.customer")
            .then(response => response.json())
            .then(json => {listCustomers(json); showItems()})
            .catch(error => console.log(error));
});