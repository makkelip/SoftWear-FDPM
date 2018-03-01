document.addEventListener("DOMContentLoaded", function(event) {
  const button = document.getElementById("createButton");

  button.addEventListener("click", function() {

    let form = document.getElementById("formId");
    console.log(form);

    let name = form.childNodes[3].value;
    let email = form.childNodes[8].value;
    let description = form.childNodes[14].value;
    alert("Name: " + name + "\nEmail: " + email + "\nDescription: " + description);

    /*check for child nodes in form:
    let x = form.childNodes;
    console.log(x);*/
  });

});
