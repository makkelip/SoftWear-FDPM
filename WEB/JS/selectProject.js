const loadSelectProject = function() {
  //Use this when button is pressed
};

$(document).ready(function(){

    let listProjects = function (projects) {
        const projectsElement = document.getElementById("js--projects-list");
        projectsElement.innerHTML = "";

        for (let project of projects) {
            projectsElement.innerHTML +=
                `<a href="#" class="boxitem" id="${project.id}">
                <div>Project name:<br> ${project.name}</div>
                <div>Starting date:<br> ${project.startingDate}</div>
                <div>Delivery date:<br> ${project.endingDate}</div>
                <div>Description:<br> ${project.description}</div></a>`;
        }

        for (let project of projects) {
            $("body").one("click", "#" + project.id, function(){
                $("section").load("viewProject.html #js--view-project");
                projectId = project.id;
                $.getScript("JS/viewProject.js");
            });
            if (projectId == project.id) {break;}
        }
        //console.log(projectsElement);
    };

    let firstItem = 0;
    let lastItem = 2;

    const hide = item => item.style.display = "none";
    const show = item => item.style.display = "block";

    hide(document.getElementById('left-button'));
    hide(document.getElementById('right-button'));

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

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project")
        .then(response => response.json())
        .then(json => {listProjects(json); showItems()})
        .catch(error => console.log(error));
});
