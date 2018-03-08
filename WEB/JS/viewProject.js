$(function(){
    
    const loadProject = function (project) {
        console.log(project.name);
        document.getElementById('form-name').textContent = project.name;
        document.getElementById('form-startdate').textContent = project.startingDate;
        document.getElementById('form-enddate').textContent = project.endingDate;
        document.getElementById('form-desc').textContent = project.description;
    };

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project/" + projectId)
        .then(response => response.json())
        .then(json => loadProject(json))
        .catch(error => console.log(error));
    //}
});
