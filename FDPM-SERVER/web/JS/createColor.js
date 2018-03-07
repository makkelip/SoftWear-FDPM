$(function(){
    var colorPicker = true;
    const url = "http://10.114.32.58:8080/";
    const path = "FDPM-SERVER/sources/model.color";

    // create canvas and context objects
    var canvas = document.getElementById('picker');
    var ctx = canvas.getContext('2d');

    // drawing active image
    var image = new Image();
    image.onload = function () {
        ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
    };
    var imageSrc = 'libraries/colorpalette.jpg';
    image.src = imageSrc;

    $('#picker').mousemove(function(e) {
        if (colorPicker) {

            var canvasOffset = $(canvas).offset();
            var canvasX = Math.floor(e.pageX - canvasOffset.left);
            var canvasY = Math.floor(e.pageY - canvasOffset.top);


            var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
            var pixel = imageData.data;
            console.log(pixel);
            function componentToHex(c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            function rgbToHex(r, g, b) {
                var colorcode = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
                return colorcode;
            }
            var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
            $('.preview').css('backgroundColor', pixelColor);
            $('#color-code').val(rgbToHex(pixel[0],pixel[1],pixel[2]));
        }
    });
    $('#picker').click(function(e) {
        colorPicker = !colorPicker;
        $('.colorpicker').fadeToggle("linear");
    });
    $('.preview').click(function(e) {
        $('.colorpicker').fadeToggle("linear");
        colorPicker = true;
    });

    var colorset = new Object();

    document.getElementById('color-code').addEventListener("input",function()
    {
        var colorCode = document.getElementById('color-code').value;
        $('.preview').css('backgroundColor', colorCode);

    });
    document.getElementById('add-color').addEventListener("click",function()
    {
        var colorCode = document.getElementById('color-code').value;
        var colorName = document.getElementById('color-name').value;
        var colorPantone = document.getElementById('color-pantone').value;
        colorset.hexColorValue = colorCode;
        colorset.name = colorName;
        colorset.pantone = colorPantone;
        fetch(url + path,{
            'method': 'POST',
            'body': JSON.stringify(colorset),
            'headers': new Headers({'Content-Type': 'application/json'})
         }).then(result => result.json())
        .then(response => console.log('Success', response))
        .catch(error => console.log('error', error));

    });
    document.getElementById('cancel').addEventListener('click', function() {
        document.getElementById('color-name').value = "";
        document.getElementById('color-code').value = "";
        document.getElementById('color-pantone').value = "";
        $('.preview').css('backgroundColor', '#ffffff');
    }, false);
});