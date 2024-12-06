particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,  // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#41387a"  // Particle color
        },
        "shape": {
            "type": "circle",  // Shape of particles
            "stroke": {
                "width": 0,
                "color": "#ffffff"
            }
        },
        "opacity": {
            "value": 0.5,  // Opacity of particles
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,  // Size of particles
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.1,
                "sync": false
            }
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"  // Effect when hovering
            },
            "onclick": {
                "enable": true,
                "mode": "push"  // Effect when clicking
            },
            "resize": true
        }
    },
    "retina_detect": true
});

$(document).ready(function () {
    $(window).on('scroll', function () {
        $('.page-header').toggleClass('is-sticky', $(document).scrollTop() > 0);
    });

    $('.open-contact').click(function() {
        $('.contact-form').slideToggle(function() {
            if ($(this).is(':visible')) {
                $('html, body').animate({
                    scrollTop: $('.contact-form').offset().top - 250
                }, 250); // Adjust duration if needed
            }
        });
        $(this).find('i').toggleClass('fa-caret-down fa-caret-up'); 
    });

});



document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', function () {
        toggler.classList.toggle('collapsed');
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination1",
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination2",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});
