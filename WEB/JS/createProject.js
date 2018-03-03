const url = "http://10.114.32.58:8080/";
const path = "FDPM-SERVER/sources/..." //add right path

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("createButton").addEventListener("click", function() {
    let form = document.getElementById("formId");
    let name = form.childNodes[3].value;
    let date = form.childNodes[8].value;
    let description = form.childNodes[14].value;
    postProject(name, date, description);
  });
});

function postProject(name, date, description) {
  let data = {
    "name": name,
    "date": date,
    "description": description
  }
  fetch(url + path, {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  }).then(result => result.json())
  .then(response => console.log('Succes', response))
  .catch(error => console.log(error))
}
