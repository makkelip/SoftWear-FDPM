var customerId = "";

document.addEventListener("DOMContentLoaded", function (event) {

    const path = "model.customer/";
    const id = "";

    const loadProject = function (project) {
        document.getElementById('form-name').textContent = project.name;
        document.getElementById('form-mail').textContent = project.date;
        document.getElementById('form-desc').textContent = project.description;
        console.log(project);
    };

    fetch(url+path+id)
        .then(response => response.json())
        .then(json => loadProject(json))
        .catch(error => console.log(error));
});
