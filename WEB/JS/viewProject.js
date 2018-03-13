const loadProject = () => {

    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project/" + projectId)
        .then(response => response.json())
        .then(json => showProject(json))
        .catch(error => console.log(error));
    
};

function showProject(project) {
    let colorList = [];
    $('.list-box').hide();
    $('#js--button-edit-project').show();
    $('#js--button-save-project').hide();
    
    //console.log(project.name);
    $('#name-info').html(`Name:<br/><p id="form-name">${project.name}</p>`);
    $('#startdate-info').html(`Starting date:<br/><p id="form-startdate">${project.startingDate}</p>`);
    $('#enddate-info').html(`Ending date:<br/><p id="form-enddate">${project.endingDate}</p>`);
    $('#cover-percentage-info').html(`Cover percentage:<br/><p id="form-cover-percentage">${project.coverPercent}</p>`);
    $('#desc-info').html(`Description:<br/><p id="form-desc">${project.description}</p>`);

    // ProductID doesn't seem to work
    $('#products-info').html(`Products:<br/><p id="form-products">${project.productsID}</p>`);

    // View colors
    let colorsContainer = $("#form-colors");
    colorsContainer.html("");
    if(project.colors.length > 0) {
        for (let color of project.colors) {
          colorsContainer.append(
            `<div id="${color.id}" style="display:inline-block; margin: 8px; text-align: center;">
                <div style="background-color:${color.hexColorValue}; height: 40px; width: 40px; margin-bottom: 3px; border-radius: 10px">
                </div>
                ${color.name}
            </div>`);
          colorList.push({id: color.id});
        }
    }
    
    console.log(colorList);

    //Delete project
    document.getElementById("js--delete-project").onclick = function() {
        fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project/" + projectId, {
            'method': 'DELETE'
        })
            .then(response => console.log('Success', response))
            .then(result => {
                loadSection($('#js--select-project'));
                loadSelectProject();
            })
            .catch(error => console.error(error));
    };
    
    // Edit project
    document.getElementById("js--button-edit-project").onclick = function() {
        $('#name-info').html(`Name:</br><input id="form-name" value='${project.name}' />`);
        $('#startdate-info').html(`Starting date:</br><input id="form-startdate" value='${project.startingDate}' />`);
        $('#enddate-info').html(`Ending date:</br><input id="form-enddate" value='${project.endingDate}'/>`);
        $('#cover-percentage-info').html(`Cover percentage:</br><input id="form-cover-percentage" value='${project.coverPercent}' />`);
        $('#desc-info').html(`Description:</br><textarea id="form-desc" rows="6" cols="70">${project.description}</textarea>`);
        
        // Edit product doesn't work yet
        $('#products-info').html(`Products:</br><input id="form-products" value='${project.productsID}' />`);
        
        // Edit colors
        function editColor() {
            const addColor = `<div id="addColor" style="display:inline-block; margin: 8px; text-align: center;">
                <div style="background-color: black; height: 40px; width: 40px; margin-bottom: 3px; border-radius: 10px; color: white; font-size: 38px;">
                    +
                </div>
                Add
            </div>`;
            colorsContainer.append(addColor);
            
            // Remove color
            for (let color of colorList) {
                $("#" + color.id).click(function() {
                    colorList = colorList.filter(c => c.id != color.id);
                    $("#" + color.id).remove();
                    console.log(colorList);
                });
            }

            // Add color
            document.getElementById("addColor").onclick = function() {
                let listColors = function (colors) {
                    console.log(colors);
                    const colorsElement = $(".color-container-flex");
                    $('.list-box').show();
                    document.getElementById("js--close-project-color").onclick = function() {
                        $('.list-box').hide();
                    };
                    colorsElement.html("");
                    if (colorsElement === null){
                        throw new Error("No Color yet!");
                    } else {
                        for (let color of colors) {
                            colorsElement.append(
                                `<div id="add${color.id}" class="grow color-card">
                                    <div class="color" style="background:${color.hexColorValue}"></div>
                                    <div class="color-info">
                                        <p class="color-info-name">${color.name}</p>
                                        <p class="color-info-pantone">${color.pantone}</p>
                                        <p class="color-info-hex">${color.hexColorValue}</p>
                                    </div>
                                </div>`);
                        }
                        for (let color of colors) {
                            document.getElementById("add" + color.id).onclick = function() {
    //                        $("#add" + color.id).click(function() {
                                if (!colorList.some(c => c.id == color.id)) {
                                    colorList.push({id: color.id});
                                    $('#addColor').remove();
                                    colorsContainer.append(
                                        `<div id="${color.id}" style="display:inline-block; margin: 8px; text-align: center;">
                                            <div style="background-color:${color.hexColorValue}; height: 40px; width: 40px; margin-bottom: 3px; border-radius: 10px">
                                            </div>
                                            ${color.name}
                                        </div>`
                                    );
                                    $('.list-box').hide();
                                    editColor();
                                } else {
                                    alert('This color has already chosen!');
                                }
                                console.log(colorList);
                            };
                        }
                    }
                };
                fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.color")
                    .then(response => response.json())
                    .then(json => listColors(json))
                    .catch(error => console.log(error));
            };
        }
        editColor();
        
        $('#js--button-edit-project').hide();
        $('#js--button-save-project').show();
        console.log(project);
    };
    
    // Save project
    document.getElementById("js--button-save-project").onclick = function() {

        let name = $("#form-name").val();
        let startingDate = $("#form-startdate").val();
        let endingDate = $("#form-enddate").val();
        let coverPercent = $("#form-cover-percentage").val();
        let colors = colorList;
        let productsID = $("#form-products").val();
        let description = $("#form-desc").val();

        putProject(name, startingDate, endingDate, coverPercent, colors, productsID, description);
        console.log('save-p');

        
        $('#js--button-edit-project').show();
        $('#js--button-save-project').hide();
        
        loadProject();
        loadSection($('#js--view-project'));
    };
}

function putProject(name, startingDate, endingDate, coverPercent, colors, productsID, description) {

  let data = {
    "id": projectId,
    "name": name,
    "startingDate": startingDate,
    "endingDate": endingDate,
    "coverPercent": coverPercent,
    "description": description,
    "colors": colors
    /*"productsID": productsID*/
  }
  console.log(data);

  fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project/" + projectId, {
    'method': 'PUT',
    'body': JSON.stringify(data),
    'headers': new Headers({'Content-Type': 'application/json'})
  })
    .then(response => console.log('Success', response))
    .then(result => loadProject())
    .catch(error => console.error(error));
}