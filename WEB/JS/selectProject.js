/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

const loadSelectProject = () => {
    let listProjects = function (projects) {
        const projectsElement = document.getElementById("js--projects-list");
        projectsElement.innerHTML = "";

        for (let project of projects) {
            projectsElement.innerHTML +=
                `<a href="#" class="boxitem projectItems" id="${project.id}">
                <div>Project name:<br> ${project.name}</div>
                <div>Starting date:<br> ${project.startingDate}</div>
                <div>Delivery date:<br> ${project.endingDate}</div>
                <div>Description:<br> ${project.description}</div></a>`;
            console.log(project.id);
        }
        
        for (let project of projects) {
            $("body").one("click", "#" + project.id, function(){
                $("section").load("viewProject.html #js--view-project");
                projectId = project.id;
                $.getScript("JS/viewProject.js");
            });
            if (projectId == project.id) {break;}
        }
        console.log(projectsElement);
    };

    let firstItem = 0;
    let lastItem = 2;

    const hide = item => item.style.display = "none";
    const show = item => item.style.display = "block";

    hide(document.getElementById('prev-project'));
    hide(document.getElementById('next-project'));

    const showItems = () => {

        const items = $(".projectItems");
        console.log('show-project');

        if (items.length > 3) {
            show(document.getElementById('prev-project'));
            show(document.getElementById('next-project'));

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

            document.getElementById('prev-project').onclick = prev;
            document.getElementById('next-project').onclick = next;

            [].forEach.call(items, hide);
            activeItems.forEach(show);
        }
    };

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project")
        .then(response => response.json())
        .then(json => {listProjects(json); showItems()})
        .catch(error => console.log(error));
};