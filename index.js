
// scroll fucntion
function navMenu(){
    var navBar =  document.querySelector('.navbar-sticky');

    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 120){
            navBar.classList.add("navbar-sticky-moved-up");
        }else{
            navBar.classList.remove("navbar-sticky-moved-up");
        }
        if(scroll >= 250){
            navBar.classList.add("navbar-sticky-transitioned");
        }else{
            navBar.classList.remove("navbar-sticky-transitioned");
        }
        if(scroll >= 500){
            navBar.classList.add("navbar-sticky-on");
        }else{
            navBar.classList.remove("navbar-sticky-on");
        }
    }
}
navMenu();


function loadDpImages() {
    var images = [
        "./images/dp/dinesh_dp_1.jpg",
        "./images/dp/dinesh_dp_2.jpg",
        "./images/dp/dinesh_dp_3.jpg"
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