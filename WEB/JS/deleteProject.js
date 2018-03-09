$(document).ready(function() {
  document.getElementById("js--delete-project").addEventListener('click', function() {
    deleteProject();
    
    //Loads all projects page
    $("section").load("selectProject.html #js--select-project");
    $.getScript("JS/selectProject.js");
  })
});

function deleteProject() {
  return fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project/" + projectId, {
    'method': 'DELETE'
  })
  .then(response => response.json());
}
