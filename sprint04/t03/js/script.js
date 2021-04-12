let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) { 
    showSlides(slideIndex += n);
}
t = setInterval(function() {
    slides = document.getElementsByClassName("Slide");
    if (slideIndex + 1 > slides.length) {
        slideIndex = 1
        showSlides(slideIndex);
    } else
        showSlides(slideIndex++);
}, 3000)

function showSlides(n) {
    let slides = document.getElementsByClassName("Slide");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}