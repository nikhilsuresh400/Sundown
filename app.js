
// Importing LOCOMOTIVE JS here
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// ================== Starts Here ================== //

function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");

    // Mouse Enter/Leave
    elemC.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
    });

    // Image Change
    var elems = document.querySelectorAll(".elem");

    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`
        });
    });

    // Page 4
    var design = document.querySelector("#left-border .design");
    var project = document.querySelector("#left-border .project");
    var execution = document.querySelector("#left-border .execution");
    var leftBorder = document.querySelector("#left-border");

    var image = document.querySelector("#page4-right img");

    design.addEventListener("click", function() {
        design.style.color = "#EFEAE3";
        project.style.color = "#726f6a";
        execution.style.color = "#726f6a";

        image.setAttribute("src", "/NewWebsite/media/design.jpg");
    });
    project.addEventListener("click", function() {
        design.style.color = "#726f6a";
        project.style.color = "#EFEAE3";
        execution.style.color = "#726f6a";

        image.setAttribute("src", "/NewWebsite/media/project.jpg");
    });
    execution.addEventListener("click", function() {
        design.style.color = "#726f6a";
        project.style.color = "#726f6a";
        execution.style.color = "#EFEAE3";

        image.setAttribute("src", "/NewWebsite/media/execution.jpg");
    });
}

// Swiper JS
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
    });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");

    var flag = 0;
    menu.addEventListener("click", function() {
        if (flag == 0) {

            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
        
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    });
}

function loadAnimation() {
    var loader = document.querySelector("#loader");

    setTimeout(function() {
        loader.style.top = "-100%";
    },5500)
};

swiperAnimation();
page4Animation();
menuAnimation();
loadAnimation();