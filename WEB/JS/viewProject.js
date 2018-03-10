$(document).ready(function() {
    fetch("http://10.114.32.58:8080/FDPM-SERVER/sources/model.project/" + projectId)
        .then(response => response.json())
        .then(json => loadProject(json))
        .catch(error => console.log(error));
});

function loadProject(project) {
    let colorList = [];
    
    //console.log(project.name);
    $('#form-name').text(project.name);
    $('#form-startdate').text(project.startingDate);
    $('#form-enddate').text(project.endingDate);
    $('#form-cover-percentage').text(project.coverPercent);
    $('#form-desc').text(project.description);

    // ProductID doesn't seem to work
    $('#form-products').text(project.productsID);

    // View colors
    let colorsContainer = $("#form-colors");
    colorsContainer.html("");
    if(project.colors.length > 0) {
        for (let color of project.colors) {
          colorsContainer.append(
            `<div id="${color.id}" style="display:inline-block; margin: 8px;">
                <div style="background-color:${color.hexColorValue}; height: 40px; width: 40px; margin-bottom: 3px">
                </div>
                ${color.name}
            </div>`);
          colorList.push({id: color.id});
        }
    }
    colorsContainer.append();
    console.log(colorList);

    //Loads the delete project script
    $.getScript("JS/deleteProject.js");

    $('#js--button-edit-project').click(function() {
        $('#name-info').html(`Name:</br><input id="form-name" value='${project.name}' />`);
        $('#startdate-info').html(`Starting date:</br><input id="form-startdate" value='${project.startingDate}' />`);
        $('#enddate-info').html(`Ending date:</br><input id="form-enddate" value='${project.endingDate}'/>`);
        $('#cover-percentage-info').html(`Cover percentage:</br><input id="form-cover-percentage" value='${project.coverPercent}' />`);
        $('#products-info').html(`Products:</br><input id="form-products" value='${project.productsID}' />`);
        //$('#colors-info').html(`Colors:</br><input id="form-colors" value='${project.colors}' />`);
        $('#desc-info').html(`Description:</br><textarea id="form-desc" rows="6" cols="70">${project.description}</textarea>`);

        $('#js--button-edit-project').hide();
        $('#js--button-save-project').show();
        console.log(project);
    });

    $('#js--button-save-project').click(function() {

        let name = $("#form-name").val();
        let startingDate = $("#form-startdate").val();
        let endingDate = $("#form-enddate").val();
        let coverPercent = $("#form-cover-percentage").val();
        //let colors = $("#form-colors").val();
        let colors = colorList;
        let productsID = $("#form-products").val();
        let description = $("#form-desc").val();

        putProject(name, startingDate, endingDate, coverPercent, colors, productsID, description);
        console.log(name);

        $("section").load("viewProject.html #js--view-project");
        $.getScript("JS/viewProject.js");
    });
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
    .catch(error => console.error(error));
}