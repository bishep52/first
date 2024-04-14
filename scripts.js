// Выпадающее меню на тачскрине

let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    let openBtn = document.getElementById('open-menu-btn')
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');

        openBtn.addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        })

    }
} else {
    body.classList.add('mouse');
}


// Модальное окно

document.getElementById('open-stock-modal-btn').addEventListener('click', function () {
    document.getElementById('stock-modal').classList.add('open')
});

document.getElementById('close-stock-modal-btn').addEventListener('click', function () {
    document.getElementById('stock-modal').classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('stock-modal').classList.remove('open')
    }
});

document.querySelector('#stock-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById('stock-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


// Модальное окно


document.getElementById('open-modal-btn').addEventListener('click', function () {
    document.getElementById('haircut-modal').classList.add('open')
});

document.getElementById('close-haircut-modal-btn').addEventListener('click', function () {
    document.getElementById('haircut-modal').classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('haircut-modal').classList.remove('open')
    }
});

document.querySelector('#haircut-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById('haircut-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Модальное окно

document.getElementById('open-manicure-modal-btn').addEventListener('click', function () {
    document.getElementById('manicure-modal').classList.add('open')
});

document.getElementById('close-manicure-modal-btn').addEventListener('click', function () {
    document.getElementById('manicure-modal').classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('manicure-modal').classList.remove('open')
    }
});

document.querySelector('#manicure-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById('manicure-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Модальное окно

document.getElementById('open-pedicure-modal-btn').addEventListener('click', function () {
    document.getElementById('pedicure-modal').classList.add('open')
});

document.getElementById('close-pedicure-modal-btn').addEventListener('click', function () {
    document.getElementById('pedicure-modal').classList.remove('open')
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('pedicure-modal').classList.remove('open')
    }
});

document.querySelector('#pedicure-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById('pedicure-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


// Слайдер


const mySlider = new Splide('#mySlider', {
    perPage: 3,
    rewind: true,
    gap: '15px',
    arrows: false,
    perMove: 1,
    pagination: false,
    type: 'loop',
    focus: 'center',
    breakpoints: {
        1200: {
            perPage: 2
        },

        768: {
            perPage: 1,
            pagination: true,
            arrows: false
        }
    },
    autoScroll: {
        speed: 0.7,
    },
})

mySlider.mount(window.splide.Extensions);


// Плавное появление элемента


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


// // Показ/скрытие картинок


const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const gallery1 = document.getElementById("haircuts");
const gallery2 = document.getElementById("manicures");
const gallery3 = document.getElementById("pedicures");

btn1.addEventListener("click", () => {
    gallery1.style.display = "grid";
    gallery2.style.display = "none";
    gallery3.style.display = "none";
});


btn2.addEventListener("click", () => {
    gallery1.style.display = "none";
    gallery2.style.display = "grid";
    gallery3.style.display = "none";

});

btn3.addEventListener("click", () => {
    gallery1.style.display = "none";
    gallery2.style.display = "none";
    gallery3.style.display = "grid";
});

btn4.addEventListener("click", () => {
    gallery1.style.display = "none";
    gallery2.style.display = "none";
    gallery3.style.display = "none";
});

// Плавный скролл на якоре

$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });

});

// Плавный скролл на странице

SmoothScroll({
    animationTime: 800,
    stepSize: 75,

    accelerationDelta: 30,

    accelerationMax: 2,

    keyboardSupport: true,

    arrowScroll: 50,

    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    touchpadSupport: true,
})