
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

// for closing and opening when clicked on expanded navbar items
function loadNavBarClicks() {
    /*const navLinks = document.querySelectorAll('.nav-item')
    const toggleBtn = document.getElementById('collapseBtn')
    let widthMatch = window.matchMedia("(max-width: 993px)");

    var elemEventHandler = function() { toggleBtn.click() };
    var docEventHandler = function(event) { 
        var clickover = event.target;
        var clsList = document.querySelector(".navbar-collapse").classList;
        var opened = clsList.contains("navbar-collapse") && clsList.contains("show");
        if (opened === true && !clickover.classList.contains("navbar-toggle")) {
            toggleBtn.click()
        }
    };

    widthMatch.addEventListener('change', function(mm) {
        if (mm.matches) {
            console.log("lesser than 993");
            // it matches the media query: that is, min-width is >= 500px
            navLinks.forEach((l) => {
                l.addEventListener('click', elemEventHandler)
            })
            document.addEventListener("click", docEventHandler(event));
        }
        else {
            console.log("greater than 993");
            // it no longer matches the media query
            // remove the event listener
            navLinks.forEach((l) => {
                l.removeEventListener("click",elemEventHandler);
            })
            document.removeEventListener("click", docEventHandler(event));
        }
    }); */

    //This is for white background coming for large screens without collapse/expand button
    if (window.innerWidth < 993) {
        const navLinks = document.querySelectorAll('.nav-item')
        const toggleBtn = document.getElementById('collapseBtn')
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                toggleBtn.click()
            })
        })

        document.addEventListener("click", function (event) {
            var clickover = event.target;
            var clsList = document.querySelector(".navbar-collapse").classList;
            var opened = clsList.contains("navbar-collapse") && clsList.contains("show");
            if (opened === true && !clickover.classList.contains("navbar-toggle")) {
                toggleBtn.click()
            }

        })
    }
}

function loadDpImages() {
    // var images = [
    //     "./images/dp/dinesh_dp_1.jpg",
    //     "./images/dp/dinesh_dp_2.jpg",
    //     "./images/dp/dinesh_dp_3.jpg"
    // ]
    var images = [
        "/portfolio/images/dp/dinesh_dp_2.jpg",
        "/portfolio/images/dp/dinesh_dp_3.jpg",
        "/portfolio/images/dp/dinesh_dp_1.jpg"
    ]
    
    var dpimage = document.getElementById('dp');
    var i = 0;
    setInterval(function () {
        // dpimage.src = "url(" + images[i] + ")";
        dpimage.src = images[i];
        // console.log(dpimage);
        i = i + 1;
        if (i == images.length) {
            i = 0;
        }
    }, 10000);
}

window.addEventListener('DOMContentLoaded', (event) => {
    loadDpImages();
    loadNavBarClicks();
});
