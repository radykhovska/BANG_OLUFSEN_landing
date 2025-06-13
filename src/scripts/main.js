'use strict';

const headerHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const topBar = document.getElementById('top-bar');

  // scrollY - scrolled from top
  if (window.scrollY > headerHeight) {
    topBar.classList.add('sticky');
  } else {
    topBar.classList.remove('sticky');
  }
});
