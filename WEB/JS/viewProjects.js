/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/
var customerId = "";

document.addEventListener("DOMContentLoaded", function (event) {
    
    const url = "http://10.114.32.58:8080/";
    const path = "FDPM-SERVER/sources/model.project";
    const id = customerId;
    
    let listProjects = function (projects) {
        const projectsELement = document.getElementById("projects-list");
        projectsELement.innerHTML = "";
    
        for (let project of projects) {
            projectsELement.innerHTML +=
                `<a href="#" class="boxitem" id="${project.id}">
                <div>Project name: ${project.name}</div>
                <div>Delivery date: ${project.date}</div>
                <div>Description: ${project.description}</div></a>`;
        }
        console.log(projectsELement);
    };
    
    let firstItem = 0;
    let lastItem = 2;
        
    const showItems = () => {
        
        const items = document.getElementsByClassName("boxitem");
        const hide = item => item.style.display = "none";
        const show = item => item.style.display = "block";
        if (items.length > 3) {
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

            [].forEach.call(items, hide);
            activeItems.forEach(show);
        } else {
            hide(document.getElementById('left-button'));
            hide(document.getElementById('right-button'));
        }
    };
    showItems();
    
    fetch(url+path+id)
        .then(response => response.json())
        .then(json => {listProjects(json); showItems()})
        .catch(error => console.log(error));
});
