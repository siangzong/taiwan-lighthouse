const nav = document.querySelector('main');
const topOfNav = nav.offsetTop;
let navFixed = false;

function stickyNav() {
  if (window.scrollY >= topOfNav && !navFixed) {
    navFixed = true;
    document.body.classList.add('navbar');
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    nav.style.position = 'fixed';
    nav.style.top = '240px';
  } else if (window.scrollY < topOfNav && navFixed) {
    navFixed = false;
    document.body.classList.remove('navbar');
    document.body.style.paddingTop = '0';
    nav.style.position = 'static';
    nav.style.top = 'auto';
  }
}

window.addEventListener('scroll', stickyNav);
