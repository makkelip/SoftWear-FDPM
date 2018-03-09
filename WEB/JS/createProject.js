
document.getElementById("js--button-submit-project").addEventListener('click', function() {
        let form = document.getElementById("js--form-id-project");
        let name = $("#name").val();
        let date = $("#endingDate").val();
        let description = $("#description").val();

        postProject(name, date, description);
        form.reset();
        console.log('clicked');
  });

function postProject(name, date, description) {

  let data = {
    "name": name,
    "endingDate": date,
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
