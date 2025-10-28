
let slidePosition = 1;

//move to the next image
function plusSlides(x) {
    showSlides(slidePosition += x);
}

//move to the previous image
    function currentSlide(x) {
    showSlides(slidePosition = x);
}

function showSlides(x) {

    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    //sets slide to the beginning when end is reached
    if (x > slides.length) {
        slidePosition = 1;
    }
    //sets slide to the end when beginning is reached
    if (x < 1) {
        slidePosition = slides.length;
    }
    //
    for (i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
        
    slides[slidePosition-1].style.display = "block";
    dots[slidePosition-1].className += " active";
    
}