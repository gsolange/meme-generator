const content = document.querySelector('.mainContainerMemeInside')
var alertMsg = "*********** Please Read *********** \n";
alertMsg += "Image must be saved in your device \n";
alertMsg += "*********** Thanks for reading ***********";
function downloadImage() {
    domtoimage.toBlob(content)
        .then(function (blob) {
            alert(alertMsg);
            window.saveAs(blob, 'my-meme.png');
        });
}