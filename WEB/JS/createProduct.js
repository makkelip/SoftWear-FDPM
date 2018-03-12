$(document).ready(function() {
  $('#js--button-submit-product').on('click', function() {
    let form = document.getElementById('js--form-id-product');
    let name = $('#js--product-name').val();
    let description = $('#js--product-description').val();

    postProduct(name, description);
    form.reset();
    console.log('clicked');
  });
});

const postProduct = function(name, description) {

  let data = {
    'name': name,
    'description': description
  };

  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product', {
    'method': 'POST',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  })
  .then(response => console.log('Success', response))
  .catch(error => console.error(error));
};
