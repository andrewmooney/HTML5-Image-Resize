$(document).ready(function(){
    /**
     * Resizes image passed, 
     * Creates a canvas DOM element (does not render to window)
     * Creates new img DOM element
     * Sets new img.src to a dataURL of resized image
     * @param {object} image 
     * @param {float} scale 
     * @param {function} callback
     * @returns {function} callback
     */
    var resizeImg = function(image, scale, callback) {
        var canvas = document.createElement("canvas");
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;

        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        resizedImg = document.createElement("img");
        resizedImg.src = canvas.toDataURL('image/jpeg', 0.6);
        callback(resizedImg);
    }

    $('#resize').on('click', function() {
        var image = document.getElementById('resizeMe');
        resizeImg(image, 0.5, function(resized){
            console.log(resized.src);
            document.getElementById('resized').src = resized.src;
            document.getElementById('resized').alt = "Resized Pickard face palm";
        });
    });
});