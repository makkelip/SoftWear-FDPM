$(function(){
    $("input[type=file]").change(function(e) {
        var file = e.originalEvent.srcElement.files[0];
        var img = document.createElement("img");
        img.id = "imageCreated";
        img.width = 400;
        img.height = 300;
        var reader = new FileReader();
        reader.onloadend = function() {
            var material_upload = document.getElementById('material-upload');
            material_upload.appendChild(img);
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
        $("input[type=file]").after(img);

    });
    $('body').on('click','#cancel',function() {
        var image_remove = document.getElementById('imageCreated');
        image_remove.parentNode.removeChild(image_remove);
        document.getElementById('material-name').value = "";
    },false);

    materialset = new Object();

    $('body').on('click','#create-material',function(event){
        event.preventDefault();
        var materialname = document.getElementById('material-name').value;
        materialset.name = materialname;
        fetch(url + 'model.material',{
            'method': 'POST',
            'body': JSON.stringify(materialset),
            'headers': new Headers({'Content-Type': 'application/json'})
        }).then(response => console.log('Success', response))
        .then(loadMaterials())
        .catch(error => console.log('error', error));

    })
});
