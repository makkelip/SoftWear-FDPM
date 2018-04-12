const loadViewColors = function() {
  fetch(url + 'model.color')
    .then(response => response.json())
    .then(function(colors) {
      console.log(colors);
      const colorsElement = document.querySelector('.color-container-flex');
      colorsElement.innerHTML = '';
      if (colorsElement === null) {
        throw new Error('No Color yet!');
      } else {
        for (let color of colors) {
          colorsElement.innerHTML +=
            `<div class="grow color-card"> <!-- värikortti-->
                    <div class="color" style="background:${color.hexColorValue}"></div> <!-- väri-->
                    <div class="color-info"> <!--väri-info-->
                        <p class="color-info-name">${color.name}</p>
                        <p class="color-info-pantone">${color.pantone}</p>
                        <p class="color-info-hex">${color.hexColorValue}</p>
                    </div>
                </div>`;
        }
      }
    });
};
