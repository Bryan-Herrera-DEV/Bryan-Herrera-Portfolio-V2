"use strict";

require("./style.min.css");

var _CV = _interopRequireDefault(require("./CV.pdf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Animaciones entrada */
require('./style.min.css');

/* Animaciones entrada */
var lista = gsap.utils.toArray(".yy");
console.log(lista[0]);

for (var index = 0; index < lista.length; index++) {
  var delay = 0.3 + index / 9;
  gsap.from(lista[index], {
    opacity: 0,
    delay: delay,
    y: -54,
    duration: delay
  });
}

gsap.from('.pOne', {
  opacity: 0,
  delay: 0.8,
  y: 54,
  duration: 0.8
});
gsap.from('.pDos', {
  opacity: 0,
  delay: 0.9,
  y: 50,
  duration: 0.9
});
gsap.from('.pTres', {
  opacity: 0,
  delay: 1,
  y: 50,
  duration: 1
});
gsap.from('.pCuatro', {
  opacity: 0,
  delay: 1.1,
  y: 50,
  duration: 1.1
});
gsap.from('.pCinco', {
  opacity: 0,
  delay: 1.2,
  y: 50,
  duration: 1.2
});
var scrollPs = 0;

window.onscroll = function () {
  var nav = document.querySelector('.header');
  var pUno = window.scrollY;

  if (pUno <= this.scrollPs) {
    this.scrollPs = pUno;
    nav.setAttribute('style', 'transform: translateY(0);');
  } else {
    this.scrollPs = pUno;
    nav.setAttribute('style', 'transform: translateY(-150%);');
  }

  console.log("Vertical: " + scrollPs);
}; // rellaxjs

/*
var rellax = new Rellax('.sobreMi', {
    breakpoints: [576, 768, 1201]
}); */
// Clicks de los Jobs


var tabs = gsap.utils.toArray(".nss");
var jobss = gsap.utils.toArray(".jobsss");

var nume = function nume(indice) {
  if (indice == 0) {
    barra.classList.add('uno');
  } else if (indice == 1) {
    barra.classList.add('dos');
  } else if (indice == 2) {
    barra.classList.add('tres');
  } else if (indice == 3) {
    barra.classList.add('cuatro');
  }
};

var barra = document.getElementById('barra');
document.querySelectorAll('.nss').forEach(function (e, i) {
  e.addEventListener('click', function () {
    if (e.getAttribute('class') == 'nss non') {
      //console.log(`Elemeto al que se le hace click: ${i}`);
      for (var _index = 0; _index < tabs.length; _index++) {
        if (tabs[_index].getAttribute('class') == 'nss active') {
          tabs[_index].classList.remove('active');

          tabs[_index].classList.add('non');

          jobss[_index].classList.remove('active');

          jobss[_index].classList.add('mo'); //console.log(`Elemento del que vengo: ${index}`);


          if (barra.getAttribute('class').split(" ")[1] == "uno") {
            //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
            barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
            nume(i);
          } else if (barra.getAttribute('class').split(" ")[1] == "dos") {
            //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
            barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
            nume(i);
          } else if (barra.getAttribute('class').split(" ")[1] == "tres") {
            //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
            barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
            nume(i);
          } else if (barra.getAttribute('class').split(" ")[1] == "cuatro") {
            //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
            barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
            nume(i);
          }
        }
      }

      jobss[i].classList.remove('mo');
      jobss[i].classList.add('active');
      e.classList.remove('non');
      e.classList.add('active');
    }
  });
});
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true
  }
});

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;

  if (elem.classList.contains("desdeIzquierda")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("desdeDerecha")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("desdeDeAbajo")) {
    x = 0;
    y = 100;
  } else if (elem.classList.contains("desdeDeArriba")) {
    x = 0;
    y = -100;
  }

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {
    x: x,
    y: y,
    autoAlpha: 0
  }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {
    autoAlpha: 0
  });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      end: '110%',
      onEnter: function onEnter() {
        animateFrom(elem);
      },
      onEnterBack: function onEnterBack() {
        animateFrom(elem, -1);
      },
      onLeave: function onLeave() {
        hide(elem);
      } // assure that the element is hidden when scrolled into view

    });
  });
});
/* var rightBack = document.querySelector('.gs_reveal_fromRight')
gsap.to(rightBack, {
    x: 10,
    scrollTrigger: {
        trigger: ".gs_reveal gs_reveal_fromRight",
        start: 'top top',
        scrub: true
    }, // start the animation when ".box" enters the viewport (once)
    x: -100,
    y: 0
}); */
//listener para los hashlocationa
// window.location.hash = window.location.hash || '#/';
// router(window.location.hash);

window.addEventListener('hashchange', function () {
  router(window.location.hash);
  /*if (window.location.hash === '#/markets') {
      
  }
  if (window.location.hash == '#/api' || window.location.hash == '#/api/documentation') {
      
    } else {
      
    }
  if (window.location.hash == '#/api/documentation') {
      
  }*/
});
/* Smooth Scroll */

$('a[href*="#"]').on('click', function (e) {
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  }, 500);
  e.preventDefault();
});
var but_nav___ = document.querySelector('#but_nav');
var aside_a = document.querySelector('#aside_de_nav');
var boudy = document.querySelector('#boudy');
but_nav___.addEventListener('click', function () {
  but_nav___.classList.toggle('eCxtrN');
  but_nav___.classList.toggle('eVRjg');
  aside_a.classList.toggle('dKogfI');
  aside_a.classList.toggle('dSbVSd');
  boudy.classList.toggle('blur');
});