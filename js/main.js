// ++++++++++++++++++++++++++++++++++++++++++SIDEBAR++++++++++++++++++++++++++++++++++++++++++++
document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('header-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//ambil icon sidebar 
var nav_home = document.querySelector('.nav_list a:nth-child(1)');
var nav_about = document.querySelector('.nav_list a:nth-child(2)');
var nav_history = document.querySelector('.nav_list a:nth-child(3)');
var nav_divisi = document.querySelector('.nav_list a:nth-child(4)');
var nav_leader = document.querySelector('.nav_list a:nth-child(5)');

//ambil height dari setiaps section
var home_value = (document.querySelector('section#home .carousel').clientHeight) - 100;
var about_value = document.querySelector('section#about .container').clientHeight;
var history_value = document.querySelector('section#history .container').clientHeight;
var division_value = document.querySelector('section#division .container').clientHeight;
var leader_value = document.querySelector('section#leader .container').clientHeight;

// ++++++++++++++++++++++++++++++++++++++++++tombol to up++++++++++++++++++++++++++++++++++++++++++++
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function () {
    // ++++++++++++++++++++++++++++++++++++++++++owl-carousel+++++++++++++++++++++++++++++++++++++++++++
    $('.owl-one').owlCarousel({
        autoplay: true,
        margin: 30,
        loop: true,
        nav: true,
        navText: ["<i class='bx bxs-chevron-left-circle'></i>", "<i class='bx bxs-chevron-right-circle'></i>"],
        autoplaySpeed: 1000,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true,
                stagePadding: 10,
                singleItem: true,
            },
            600: {
                items: 1,
                center: true,
                stagePadding: 10,
            },
            1000: {
                items: 2,
                rtl: false,
                stagePadding: 0,
            }
        }
    });

    $('.featured-carousel').owlCarousel({
        loop: true,

        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='bx bxs-chevron-left-circle'></i>", "<i class='bx bxs-chevron-right-circle'></i>"],
        nav: true,
        responsive: {
            0: {
                items: 1,
                center: true,
                stagePadding: 10,
                margin: 30,
                singleItem: true,

            },
            600: {
                items: 1,
                center: true,
                stagePadding: 5,
            },
            1000: {
                items: 2,
                rtl: true,
                stagePadding: 0,
                margin: 30,
            }
        }
    });

    $('.carousel-testimony').owlCarousel({
        center: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // ++++++++++++++++++++++++++++++++++++++++++saat scroll lakukan++++++++++++++++++++++++++++++++++++++++++++
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            mybutton.style.display = "block";
            document.getElementById("header").classList.add('bg-light');
        } else {
            mybutton.style.display = "none";
            document.getElementById("header").classList.remove('bg-light');
            nav_home.classList.add("active");
            nav_about.classList.remove("active");
            nav_history.classList.remove("active");
        }

        if (scroll > home_value && scroll < (home_value + about_value)) {
            nav_about.classList.add('active');
            nav_home.classList.remove('active');
            nav_history.classList.remove('active');
            nav_divisi.classList.remove('active');
            nav_leader.classList.remove('active');
        } else if (scroll > (home_value + about_value) &&
            scroll < (home_value + about_value + history_value)) {
            nav_history.classList.add('active');
            nav_about.classList.remove('active');
            nav_home.classList.remove('active');
            nav_divisi.classList.remove('active');
            nav_leader.classList.remove('active');
        } else if (scroll > (home_value + about_value + history_value) &&
            scroll < (home_value + about_value + history_value + division_value)) {
            nav_history.classList.remove('active');
            nav_about.classList.remove('active');
            nav_home.classList.remove('active');
            nav_divisi.classList.add('active');
            nav_leader.classList.remove('active');
        } else if (scroll > (home_value + about_value + history_value + division_value) &&
            scroll < (home_value + about_value + history_value + division_value + leader_value)) {
            nav_history.classList.remove('active');
            nav_about.classList.remove('active');
            nav_home.classList.remove('active');
            nav_divisi.classList.remove('active');
            nav_leader.classList.add('active');
        } else if (scroll > (home_value + about_value + history_value + division_value + leader_value)) {
            nav_history.classList.remove('active');
            nav_about.classList.remove('active');
            nav_home.classList.remove('active');
            nav_divisi.classList.remove('active');
            nav_leader.classList.remove('active');
        }
    })
});

// ++++++++++++++++++++++++++++++++++++++++++tombolnya 2 mode++++++++++++++++++++++++++++++++++++++++++++

var moon = document.querySelector('.btn-moon');
var sun = document.querySelector('.btn-sun');

document.getElementById("darkSwitch").addEventListener("click", function () {
    moon.classList.toggle('d-none');
    sun.classList.toggle('d-none');
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++counter up function++++++++++++++++++++++++++++++++++++++++++++

const counters = document.querySelectorAll('.value');
const speed = 1000;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('count');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++preloader++++++++++++++++++++++++++++++++++++++++++++
var preloader = document.getElementById("loading");

function load() {
    preloader.style.display = 'none';
}

// account settings 

var user_button = document.querySelector('.bxs-user-circle');
var settings_account = document.querySelector('.settings_account');

user_button.addEventListener("click", function () {
    settings_account.classList.toggle('d-none');
})