// ASSIN UI ELEMENTS TO VARIABLES
const firstSlide = document.querySelector('.slide-1');
const secondSlide = document.querySelector('.slide-2');
const thirdSlide = document.querySelector('.slide-3');

const slides = Array.from(document.querySelectorAll('.background-overlay'));

const firstSlideControl = document.getElementById('slide-1-control');
const secondSlideControl = document.getElementById('slide-2-control');
const thirdSlideControl = document.getElementById('slide-3-control');

document.querySelectorAll('.bar').forEach((element) => {
    element.addEventListener('click', changeSlides);
});

function changeSlides(e) {

    if(e.target.id === 'slide-1-control') {
        slides.forEach(function(element) {
            element.classList.remove('visible');
        });
        firstSlide.classList.add('visible');
    } else if(e.target.id === 'slide-2-control') {
        slides.forEach(function(element) {
            element.classList.remove('visible');
        });
        secondSlide.classList.add('visible');
    } else if(e.target.id === 'slide-3-control') {
        slides.forEach(function(element) {
            element.classList.remove('visible');
        });
        thirdSlide.classList.add('visible');
    }
}

firstSlide.classList.add('visible');
