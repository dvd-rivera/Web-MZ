var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");

var slideAll = document.getElementById("carousel-item-1", "carousel-item-2", "carousel-item-3", "carousel-item-4", "carousel-item-5", "carousel-item-6")
var slide1 = document.getElementById("carousel-item-1")
var slide2 = document.getElementById("carousel-item-2")
var slide3 = document.getElementById("carousel-item-3")
var slide4 = document.getElementById("carousel-item-4")
var slide5 = document.getElementById("carousel-item-5")
var slide6 = document.getElementById("carousel-item-6")

var indicator1 = document.getElementById("indicator-1")
var indicator2 = document.getElementById("indicator-2")
var indicator3 = document.getElementById("indicator-3")
var indicator4 = document.getElementById("indicator-4")
var indicator5 = document.getElementById("indicator-5")
var indicator6 = document.getElementById("indicator-6")

var carouselItem = document.getElementsByClassName("carousel-item");

btn1.addEventListener('click', () => {
        slide1.classList.remove('active');
        slide2.classList.remove('active');
        slide3.classList.remove('active');
        slide4.classList.remove('active');
        slide5.classList.remove('active');
        slide6.classList.remove('active');
        indicator1.classList.remove('active');
        indicator2.classList.remove('active');
        indicator3.classList.remove('active');
        indicator4.classList.remove('active');
        indicator5.classList.remove('active');
        indicator6.classList.remove('active');
        slide1.classList.add('active');
        indicator1.classList.add('active');
});

btn2.addEventListener('click', () => {
    slide1.classList.remove('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');
    slide4.classList.remove('active');
    slide5.classList.remove('active');
    slide6.classList.remove('active');
    indicator1.classList.remove('active');
    indicator2.classList.remove('active');
    indicator3.classList.remove('active');
    indicator4.classList.remove('active');
    indicator5.classList.remove('active');
    indicator6.classList.remove('active');
    slide2.classList.add('active');
    indicator2.classList.add('active');
});

btn3.addEventListener('click', () => {
    slide1.classList.remove('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');
    slide4.classList.remove('active');
    slide5.classList.remove('active');
    slide6.classList.remove('active');
    indicator1.classList.remove('active');
    indicator2.classList.remove('active');
    indicator3.classList.remove('active');
    indicator4.classList.remove('active');
    indicator5.classList.remove('active');
    indicator6.classList.remove('active');
    slide3.classList.add('active');
    indicator3.classList.add('active');
});

btn4.addEventListener('click', () => {
    slide1.classList.remove('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');
    slide4.classList.remove('active');
    slide5.classList.remove('active');
    slide6.classList.remove('active');
    indicator1.classList.remove('active');
    indicator2.classList.remove('active');
    indicator3.classList.remove('active');
    indicator4.classList.remove('active');
    indicator5.classList.remove('active');
    indicator6.classList.remove('active');
    slide4.classList.add('active');
    indicator4.classList.add('active');
});

btn5.addEventListener('click', () => {
    slide1.classList.remove('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');
    slide4.classList.remove('active');
    slide5.classList.remove('active');
    slide6.classList.remove('active');
    indicator1.classList.remove('active');
    indicator2.classList.remove('active');
    indicator3.classList.remove('active');
    indicator4.classList.remove('active');
    indicator5.classList.remove('active');
    indicator6.classList.remove('active');
    slide5.classList.add('active');
    indicator5.classList.add('active');
});

btn6.addEventListener('click', () => {
    slide1.classList.remove('active');
    slide2.classList.remove('active');
    slide3.classList.remove('active');
    slide4.classList.remove('active');
    slide5.classList.remove('active');
    slide6.classList.remove('active');
    indicator1.classList.remove('active');
    indicator2.classList.remove('active');
    indicator3.classList.remove('active');
    indicator4.classList.remove('active');
    indicator5.classList.remove('active');
    indicator6.classList.remove('active');
    slide6.classList.add('active');
    indicator6.classList.add('active');
});


