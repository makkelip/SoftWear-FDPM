const loadMaterials = function() {
  fetch('http://10.114.32.58:8080/FDPM-SERVER/sources/model.material')
    .then(response => response.json())
    .then(json => listMaterials(json))
    .catch(error => console.log(error));
};

let listMaterials = function(materials) {
  const materialsElement = document.querySelector('.flex-materials');
  materialsElement.innerHTML = '';
  if (materialsElement === null) {
    throw new Error('No Materials yet!');
  } else {
    for (let material of materials) {
      materialsElement.innerHTML +=
        `<div class='grow material-card js--button-view-material' id='${material.id}'>
        <div class='material-image'>
        <img src='https://img1.etsystatic.com/000/0/5977438/il_570xN.191399199.jpg' alt='Loading...'/>
        </div>
        <div class='material-card-name'>${material.name}</div>
        </div>`;
      let identifier = '.material-card#' + material.id;
      materialId = material.id;
    }
  }
};
