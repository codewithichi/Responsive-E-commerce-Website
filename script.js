const header = document.querySelector("header")

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classlist.toggle('bx-x');
  navlist.classlist.toggle('open');
};

window.onscroll = () => {
  menu.classlist.remove('bx-x');
  navlist.classlist.remove('open');
};

const sr = SrollReveal ({
  distance: '30px',
  duration: 2600,
  reset: true
})

sr.reveal('home-text',{delay:280, origin: bottom})

sr.reveal('.featured,.cta,.new,.brand,.contact',{delay:200, origin: bottom})
      