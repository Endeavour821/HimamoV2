//Get the button:
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//saat scroll ganti bg header 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        if (document.body.getAttribute("data-theme", "dark")) {
            document.getElementById("header").style.background = "#393e46";
        } else {
            document.getElementById("header").style.background = "#f8f9fa";
        }
    } else {
        mybutton.style.display = "none";
        document.getElementById("header").style.background = "none";
    }
}

$(document).ready(function () {
    $('.owl-one').owlCarousel({
        autoplay: true,
        margin: 30,
        loop: true,
        nav: true,
        navText: ["<i class='bx bxs-chevron-left-circle'></i>", "<i class='bx bxs-chevron-right-circle'></i>"],
        autoplaySpeed: 2000,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: true,
                stagePadding: 10,
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
        autoplaySpeed: 2000,
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
});

// toggledark       
function myFunction(x) {
    x.classList.toggle("bxs-sun");
}

//counter up
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