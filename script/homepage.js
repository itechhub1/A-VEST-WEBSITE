
/*===============Hero Slider Toggle=======================*/
const sliderImages = document.querySelectorAll('.slider');

sliderImages.forEach((slider) => {
  slider.addEventListener('click', () => {
    removeActiveClasses();
    slider.classList.add('active');
  });
});

function removeActiveClasses() {
  sliderImages.forEach((slider) => {
    slider.classList.remove('active');
  });
}
