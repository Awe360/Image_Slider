const nodeList = document.querySelectorAll('.slides img');
let slideIdx = 0;

initializer();

function initializer() {
    nodeList[slideIdx].classList.add('displayer');
}

function showSlides(index) {
    nodeList[slideIdx].classList.remove('displayer');
    slideIdx = (index + nodeList.length) % nodeList.length; // Ensure the index wraps around
    nodeList[slideIdx].classList.add('displayer');
}

function prevSlide() {
    showSlides(slideIdx - 1);
}

function nextSlide() {
    showSlides(slideIdx + 1);
}
