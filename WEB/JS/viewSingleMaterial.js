const loadSingleMaterial = function() {
  fetch(url + 'model.material/' + materialId)
    .then((response) => response.json())
    .then(function(json) {
      //name
      $('#material-name-field').text(json.name);
      //product related
      var previousProduct = document.getElementById('products-field');
      previousProduct.innerHTML = '';
      for (let i = 0; i < json.productsID.length; i++) {
        console.log(json.productsID[i]);
        fetch(url + 'model.product/' + json.productsID[i])
          .then((response) => response.json())
          .then(function(json) {
            previousProduct.innerHTML += `<p>${json.name}</p>`;
          });
      }
    });
};
