/* eslint-env browser, console */
/* eslint-disable no-alert, no-console, no-unused-vars*/

const loadSelectProject = () => {
    let listProjects = function (projects) {
        const projectsElement = document.getElementById("js--projects-list");
        projectsElement.innerHTML = "";

        for (let project of projects) {
            projectsElement.innerHTML +=
                `<a href="#" class="boxitem projectItems" id="${project.id}">
                <div class="slideshow-describer">Project name:</div>
                <div class="slideshow-text slideshow-name-highlight"> ${project.name}</div>
                <div class="slideshow-describer">Starting date:</div>
                <div class="slideshow-text"> ${project.startingDate}</div>
                <div class="slideshow-describer">Delivery date:</div>
                <div class="slideshow-text"> ${project.endingDate}</div>
                <div class="slideshow-describer">Description:</div>
                <div class="slideshow-text"> ${project.description}</div></a>`;
            console.log(project.id);
        }

        for (let project of projects) {
            document.getElementById("" + project.id).onclick = function() {
                projectId = project.id;
                if ($('#js--view-project').length == 0) {
                  $.get('viewProject.html', function(data) {
                    section.append(data);
                    $.getScript('JS/viewProject.js', () => loadProject());
                  });
                } else {
                  loadProject();
                }
                loadSection($('#js--view-project'));
            };
        }
        console.log(projectsElement);
    };

    let firstItem = 0;
    let lastItem = 2;

    const hide = item => item.style.display = "none";
    const show = item => item.style.display = "block";

    hide(document.getElementById('prev-project'));
    hide(document.getElementById('next-project'));

    function showItems() {

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
    }

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project")
        .then(response => response.json())
        .then(json => {
            listProjects(json);
            showItems();
        })
        .catch(error => console.log(error));
};
