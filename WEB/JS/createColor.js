const url = "http://10.114.32.58:8080/";
const path = "FDPM-SERVER/sources/model.customer/ret";

document.addEventListener("DOMContentLoaded", function(event) {
    let colorCode = document.getElementById('colorCode');
    let color = document.getElementById('color');
    color.value = '#ffffff';
    colorCode.addEventListener('input', function() {
        color.value = colorCode.value;
    }), false;
    color.addEventListener('input', function() {
        colorCode.value = color.value;
    })
    document.getElementById('createButton').addEventListener('click', function() {
        const name = document.getElementById('colorName').value;
        const code = document.getElementById('colorCode').value;
        postColor(name, code);
    }, false);
}, false);

function postColor(name, code) {
  let data = {
    "name": name,
    "code": code,
  }
  fetch(url + path, {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  }).then(result => result.json())
  .then(response => console.log('Success', response))
  .catch(error => console.error(error))
}
