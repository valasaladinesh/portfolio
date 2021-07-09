

function loadDpImages() {
    var images = [
        "./dinesh.jpg",
        "./dinesh2.jpg"
    ]
    
    var dpimage = document.getElementById('dp');
    var i = 0;
    setInterval(function () {
        // dpimage.src = "url(" + images[i] + ")";
        dpimage.src = images[i];
        console.log(dpimage);
        i = i + 1;
        if (i == images.length) {
            i = 0;
        }
    }, 10000);
}

window.addEventListener('DOMContentLoaded', (event) => {
    loadDpImages();
});