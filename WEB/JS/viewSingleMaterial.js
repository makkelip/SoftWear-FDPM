const loadSingleMaterial = function() {
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.material/' + materialId)
    .then((response) => response.json())
    .then(function(json) {
      //name
      $('#material-name-field').text(json.name);
      //product related
      for (let i = 0; i < json.productsID.length; i++) {
        console.log(json.productsID[i]);
        fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.product/' + json.productsID[i])
          .then((response) => response.json())
          .then(function(json) {
            var previousProduct = document.getElementById('products-field');
            previousProduct.innerHTML += `<p>${json.name}</p>`;
          });
      }
    });
};
