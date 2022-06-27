const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger');
const items = document.querySelectorAll('.overlay__item');

function togglePopup() {
    overlay.classList.toggle('overlay_active');
}

function toggleButtonState() {
    hamburger.classList.toggle('hamburger_active');
}

hamburger.addEventListener('click', () => {
    togglePopup();
    toggleButtonState();
})

items.forEach((item) => {
   item.addEventListener('click', () => {
       togglePopup();
       toggleButtonState();
   });
})