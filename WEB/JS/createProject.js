
document.getElementById("js--button-submit-project").addEventListener('click', function() {
        let form = document.getElementById("js--form-id-project");
        let name = $("#name").val();
        let date = new Date();
        let startingDate = date.toISOString().slice(0,10);
        let endingDate = $("#endingDate").val();
        let description = $("#description").val();
        
        postProject(name, startingDate, endingDate, description);
        form.reset();
        console.log(startingDate);
  });

function postProject(name, startingDate, endingDate, description) {

  let data = {
    "name": name,
    "startingDate": startingDate,
    "endingDate": endingDate,
    "description": description
  }

  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project", {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  })
    .then(result => result.json())
    .then(response => console.log('Success', response))
    .catch(error => console.error(error));

    $("section").load("selectProject.html #js--select-project");
    $.getScript("JS/selectProject.js");
}
