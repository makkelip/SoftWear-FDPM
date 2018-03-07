const url = "http://10.114.32.58:8080/";
const path = "FDPM-SERVER/sources/model.customer";

document.addEventListener("DOMContentLoaded", function(event) {
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
    document.getElementById('cancel').addEventListener('click', function() {
        var image_remove = document.getElementById('imageCreated');
        image_remove.parentNode.removeChild(image_remove);
        document.getElementById('material-name').value = "";
    },false);

    });
