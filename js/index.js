let navtoggle = document.querySelector('.nav-toggle');
let navActive = document.querySelector('.nav_active');
let windowSize = window.matchMedia("(min-width: 770px)");
let headerLine = document.querySelector('.header');
let headerInner = document.querySelector('.header__inner');
let showScroll = document.getElementById('showScroll');
let sticky = headerInner.scrollTop;
let accordionButton = document.querySelector('.accordion__header:after');
console.log(accordionButton);


navtoggle.addEventListener('click', function() {
    navtoggle.classList.add('active');
    console.log(navtoggle.classList);

    if (navActive.style.display != 'block') {
        navActive.style.display = 'block';
        console.log(navActive.style.display);
    } else {
        navActive.style.display = 'none';
        console.log(navActive.style.display);
        navtoggle.classList.remove('active');
    }

})

function NavStyleRemover(windowSize) {
    console.log(windowSize);
    if (windowSize.matches) { // If the media request matches
        navActive.style.display = "";
    } else {}
}

NavStyleRemover(windowSize);
windowSize.addEventListener('change', NavStyleRemover);


window.onscroll = function() {myFunction()};

function myFunction() {
    if (window.scrollY > sticky) {
        headerInner.classList.add("header_fixed-large");
        headerLine.classList.add("header_line");
    } else {
        headerInner.classList.remove("header_fixed-large");
        headerLine.classList.remove("header_line");
    }
}

accordionButton.addEventListener('click', accordionButtonClicked);

function accordionButtonClicked(value) {
        console.log(value);
}