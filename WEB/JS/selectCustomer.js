/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

const loadSelectCustomer = () => {
    let listCustomers = function (customers) {
        const customersElement = document.getElementById("js--customers-list");
        customersElement.innerHTML = "";

        for (let customer of customers) {
            customersElement.innerHTML +=
                `<a href="#" class="boxitem customerItems" id="${customer.id}">
                 <div class="slideshow-describer">Company name:</div>
                 <div class="slideshow-text slideshow-name-highlight"> ${customer.name}</div>
                 <div class="slideshow-describer">Email:</div>
                 <div class="slideshow-text"> ${customer.email}</div>
                 <div class="slideshow-describer">Description:</div>
                 <div class="slideshow-text"> ${customer.description}</div></a>`;
            console.log(customer.id);
        }

        for (let customer of customers) {
            document.getElementById("" + customer.id).onclick = function() {
                customerId = customer.id;
                if ($('#js--view-customer').length == 0) {
                  $.get('viewCustomer.html', function(data) {
                    section.append(data);
                    $.getScript('JS/viewCustomer.js', () => loadCustomer());
                  });
                } else {
                  loadCustomer();
                }
                loadSection($('#js--view-customer'));
            };
        }
        console.log(customersElement);
    };

    let firstItem = 0;
    let lastItem = 2;

    const hide = item => item.style.display = "none";
    const show = item => item.style.display = "block";

    hide(document.getElementById('prev-customer'));
    hide(document.getElementById('next-customer'));

    function showItems() {
        console.log('show-cus');

        const items = $(".customerItems");

        if (items.length > 3) {
            show(document.getElementById('prev-customer'));
            show(document.getElementById('next-customer'));

            let activeItems = [];
            for (let i = firstItem; i <= lastItem; i++) {
                activeItems.push(items[i]);
            }

            const next = () => {
                console.log("next");
                if (lastItem < items.length - 1) {
                    activeItems.push(items[lastItem += 1]);
                    activeItems.shift();
                    firstItem++;
                    showItems();
                }
            };

            const prev = () => {
                console.log("prev");
                if (firstItem > 0) {
                    activeItems.pop();
                    activeItems.unshift(items[firstItem -= 1]);
                    lastItem--;
                    showItems();
                }
            };

            document.getElementById('prev-customer').onclick = prev;
            document.getElementById('next-customer').onclick = next;

            [].forEach.call(items, hide);
            activeItems.forEach(show);
        }
    }

    fetch(url + 'model.customer')
        .then(response => response.json())
        .then(json => {
            listCustomers(json);
            showItems();
            console.log('fetch-cus');
        })
        .catch(error => console.log(error));
};
