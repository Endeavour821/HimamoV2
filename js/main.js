//Get the button:
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}