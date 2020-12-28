
// Navbar Toggle
const menuToggler = document.querySelector('.menu-toggle');
menuToggler.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

// Copyright Date
const date = document.querySelector('.date');
date.textContent = new Date().getFullYear();

/*===============Hero Slider Toggle=======================*/
const header = document.querySelector('header');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > header.offsetHeight + 100) {
    header.classList.add('active');
    document.body.style.backgroundColor = '#fff !important';
  } else {
    header.classList.remove('active');
  }
}



// Animate On Scroll
AOS.init();
