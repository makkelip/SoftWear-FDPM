$(document).ready(function() {
  document.getElementById("js--delete-project").addEventListener('click', function() {
    deleteProject();

    //Loads all projects page
    $("section").load("selectProject.html #js--select-project");
    $.getScript("JS/selectProject.js");
  })
});

function deleteProject() {
  return fetch(url + 'model.project/' + projectId, {
    'method': 'DELETE'
  })
  .then(response => response.json());
}
