$(function(){

    const loadProject = function (project) {
        //console.log(project.name);
        document.getElementById('form-name').textContent = project.name;
        document.getElementById('form-startdate').textContent = project.startingDate;
        document.getElementById('form-enddate').textContent = project.endingDate;
        document.getElementById('form-cover-percentage').textContent = project.coverPercent;
        document.getElementById('form-products').textContent = project.colors;
        document.getElementById('form-colors').textContent = project.productsID;
        document.getElementById('form-desc').textContent = project.description;
        //console.log(project);

        //Loads the delete project script
        $.getScript("JS/deleteProject.js");
    };

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project/" + projectId)
        .then(response => response.json())
        .then(json => loadProject(json))
        .catch(error => console.log(error));
    //}
});
