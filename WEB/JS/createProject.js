$(document).ready(function(){
    
    $("body").on("click", ".js--button-submit-project", function() {
        let name = $("#name").val();
        let date = $("#endingDate").val();
        let description = $("#description").val();
        
        postProject(name, date, description);
        console.log('clicked');
  });
    
});

function postProject(name, date, description) {
    
  let data = {
    "name": name,
    "date": date,
    "description": description
  }
  
  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project", {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  })
      .then(result => result.json())
      .then(response => console.log('Succes', response))
      .catch(error => console.error(error));
}