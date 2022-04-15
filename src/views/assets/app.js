
/* Animaciones entrada */
require('./style.min.css');
import "./style.min.css";
import PdfFile from './CV.pdf'

/* Animaciones entrada */
let lista = gsap.utils.toArray(".yy");
for (let index = 0; index < lista.length; index++) {
    const delay = 0.3 + (index / 9);

    gsap.from(lista[index], {
        opacity: 0,
        delay: delay,
        y: -54,
        duration: delay,
    });
}

gsap.from('.pOne', {
    opacity: 0,
    delay: 0.8,
    y: 54,
    duration: 0.8,
});
gsap.from('.pDos', {
    opacity: 0,
    delay: 0.9,
    y: 50,
    duration: 0.9,
});
gsap.from('.pTres', {
    opacity: 0,
    delay: 1,
    y: 50,
    duration: 1,
});
gsap.from('.pCuatro', {
    opacity: 0,
    delay: 1.1,
    y: 50,
    duration: 1.1,
});
gsap.from('.pCinco', {
    opacity: 0,
    delay: 1.2,
    y: 50,
    duration: 1.2,
});
const scrollPs = 0;
window.onscroll = function () {
    const nav = document.querySelector('.header');
    var pUno = window.scrollY;
    if (pUno <= this.scrollPs) {
        this.scrollPs = pUno;
        nav.setAttribute('style', 'transform: translateY(0);')
    } else {
        this.scrollPs = pUno;
        nav.setAttribute('style', 'transform: translateY(-150%);')
    }
};

// rellaxjs
/*
var rellax = new Rellax('.sobreMi', {
    breakpoints: [576, 768, 1201]
}); */

// Clicks de los Jobs
var tabs = gsap.utils.toArray(".nss");
var jobss = gsap.utils.toArray(".jobsss");
const nume = (indice) => {
    if (indice == 0) {
        barra.classList.add('uno');
    } else if (indice == 1) {
        barra.classList.add('dos');
    } else if (indice == 2) {
        barra.classList.add('tres');
    } else if (indice == 3) {
        barra.classList.add('cuatro');
    }
}
var barra = document.getElementById('barra');

document.querySelectorAll('.nss').forEach(function (e, i) {
    e.addEventListener('click', function () {
        if (e.getAttribute('class') == 'nss non') {
            //console.log(`Elemeto al que se le hace click: ${i}`);
            for (let index = 0; index < tabs.length; index++) {

                if (tabs[index].getAttribute('class') == 'nss active') {
                    tabs[index].classList.remove('active');
                    tabs[index].classList.add('non');

                    jobss[index].classList.remove('active');
                    jobss[index].classList.add('mo');

                    //console.log(`Elemento del que vengo: ${index}`);

                    if (barra.getAttribute('class').split(" ")[1] == "uno") {
                        //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
                        barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
                        nume(i)
                    } else if (barra.getAttribute('class').split(" ")[1] == "dos") {
                        //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
                        barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
                        nume(i)
                    }
                    else if (barra.getAttribute('class').split(" ")[1] == "tres") {
                        //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
                        barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
                        nume(i)
                    }
                    else if (barra.getAttribute('class').split(" ")[1] == "cuatro") {
                        //console.log(`Se esta borrando ${barra.getAttribute('class').split(" ")[1]}`);
                        barra.classList.remove(barra.getAttribute('class').split(" ")[1]);
                        nume(i)
                    }
                }

            }
            jobss[i].classList.remove('mo');

            jobss[i].classList.add('active');
            e.classList.remove('non');
            e.classList.add('active');

        }

    })
})

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
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
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0, }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",

    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            end: '110%',
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
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

window.addEventListener('hashchange', () => {
    router(window.location.hash);
    /*if (window.location.hash === '#/markets') {
        
    }
    if (window.location.hash == '#/api' || window.location.hash == '#/api/documentation') {
        

    } else {
        

    }
    if (window.location.hash == '#/api/documentation') {
        
    }*/
})
/* Smooth Scroll */
$('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 500);
    e.preventDefault();
});


let but_nav___ = document.querySelector('#but_nav');
let aside_a = document.querySelector('#aside_de_nav');
let boudy = document.querySelector('#boudy');
but_nav___.addEventListener('click', () => {
    but_nav___.classList.toggle('eCxtrN');
    but_nav___.classList.toggle('eVRjg');

    aside_a.classList.toggle('dKogfI');
    aside_a.classList.toggle('dSbVSd');

    boudy.classList.toggle('blur');
})

let pop_up_sobremi_cerrar = document.querySelector('.pop_up_sobremi_cerrar');
let pop_up_sobremi = document.querySelector('.pop_up_sobremi');

pop_up_sobremi_cerrar.addEventListener('click', () => {
    document.querySelector('.price-section').classList.toggle('scale-out-bottom');

    setTimeout(() => {
        pop_up_sobremi.classList.toggle('scale-out-horizontal');
    }, 200);
    setTimeout(() => {
        pop_up_sobremi.classList.toggle('active');
    }, 710);

    // boudy.classList.toggle('blur');
})


// cargar repos
let fetch_url = 'https://api.github.com/users/Bryan-Herrera-Dev/repos?per_page=100';
let project_sec = document.querySelector('#project_sec_ul');
window.onload = function () {
    fetch(fetch_url)
        .then(res => res.json())
        .then(data => {

            data.forEach(repo => {
                project_sec.innerHTML += `
            
                <li class="projects__StyledProject-sc-1v1fime-1 dIMCBf">
                        <div class="project-inner">
                            <div style="width: 100%;">
                                <div class="project-top">
                                    <div class="folder">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-folder">
                                            <title>Folder</title>
                                            <path
                                                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="project-links">
                                        <a href="${repo.html_url}"
                                            target="_blank" rel="noreferrer noopener" aria-label="External Link"
                                            class="external">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-github">
                                                <title>GitHub</title>
                                                <path
                                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="${repo.homepage}"
                                            style="display: ${repo.homepage ? "block" : "none"};"
                                            target="_blank" rel="noreferrer noopener" aria-label="External Link"
                                            class="external"><svg xmlns="http://www.w3.org/2000/svg" role="img"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-external-link">
                                                <title>External Link</title>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                                </path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg></a>
                                    </div>
                                </div>
                                <h3 class="project-title">
                                    <a href="${repo.html_url}" aria-label="External Link"
                                        target="_blank" rel="noreferrer noopener">${repo.name}</a>
                                </h3>
                                <div class="project-description">
                                    <p>
                                        ${repo.description ? repo.description : 'Sin descripción'}
                                    </p>
                                </div>
                            </div>
                    </li>
            
            `;
            })
        })
}

// vieww more projects
let view_more = document.querySelector('.view_more');

view_more.addEventListener('click', () => {
    view_more.style = "display: none;";
    document.querySelector('.cover_projects').classList.toggle('desactive');

    project_sec.classList.toggle('oculto');
});
