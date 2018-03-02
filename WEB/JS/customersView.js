/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

document.addEventListener("DOMContentLoaded", function (event) {
    
    const url = "http://10.114.32.58:8080/";
    const path = "FDPM-SERVER/sources/model.customer";
    
    let listCustomers = function (customers) {
        const customersELement = document.querySelector("#customers-list");
        customersELement.innerHTML = "";
    
        for (let customer of customers) {
            customersELement.innerHTML +=
                `<a href="#" class="boxitem" id="${customer.id}">
                <div>Company name: ${customer.name}</div>
                <div>Email: ${customer.email}</div>
                <div>Description: ${customer.description}</div></a>`;
        }
        console.log(customersELement);
    };
    
    let firstItem = 0;
    let lastItem = 2;
        
    const showItems = () => {
        
        const items = document.getElementsByClassName("boxitem");
        let activeItems = [];
        for (let i = firstItem; i <= lastItem; i++) {
            activeItems.push(items[i]);
        }
        
        const next = () => {
            if (lastItem < items.length - 1) {
                activeItems.push(items[lastItem += 1]);
                activeItems.shift();
                firstItem++;
                showItems();
            }
        };
        
        const prev = () => {
            if (firstItem > 0) {
                activeItems.pop();
                activeItems.unshift(items[firstItem -= 1]);
                lastItem--;
                showItems();
            }
        };
        
        document.getElementById('left-button').onclick = prev;
        document.getElementById('right-button').onclick = next;
        
        const hide = item => item.style.display = "none";
        const show = item => item.style.display = "block";
    
        [].forEach.call(items, hide);
        activeItems.forEach(show);
    };
    
    fetch(url+path)
        .then(response => response.json())
        .then(json => {listCustomers(json); showItems()})
        .catch(error => console.log(error));
});
