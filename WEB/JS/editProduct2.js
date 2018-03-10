//TEE KUNNON FUNKTIO TÄSTÄ

//color
document.getElementById('product-colors').addEventListener('click', function(event) {
  event.preventDefault();
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.color')
  .then(response => response.json())
  .then(function(colors) {
    let asideContent = document.querySelector('.aside-content');
    asideContent.innerHTML = '';
    for (let color of colors) {
      asideContent.innerHTML +=
      `<a class="color-list" id="${color.id}" style="background:${color.hexColorValue}">${color.name}</a>`;
    }
    let colorButtons = asideContent.getElementsByTagName('a');
    Array.prototype.forEach.call(colorButtons, function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' + productId + '/color/' + button.id,
        {'method': 'PUT'})
        .then(function() {
          fetchProduct(productId);
        })
        .catch(error => console.log('Error: ' + error));
      });
    });
  });
});
//material
document.getElementById('product-materials').addEventListener('click', function(event) {
  event.preventDefault();
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.material')
  .then(response => response.json())
  .then(function(materials) {
    let asideContent = document.querySelector('.aside-content');
    asideContent.innerHTML = '';
    for (let material of materials) {
      asideContent.innerHTML +=
      `< class="color-list" id="${material.id}">${material.name}</a>`;
    }
    let materialButtons = asideContent.getElementsByTagName('a');
    Array.prototype.forEach.call(colorButtons, function(button) {
      button.addEventListener('click', function(event) {

      });
    });
  });
});
