let navtoggle = document.querySelector('.nav-toggle');
let navActive = document.querySelector('.nav_active');
let navLinks = document.querySelectorAll('.nav__link');
let windowSize = window.matchMedia("(min-width: 770px)");
let headerLine = document.querySelector('.header');
let headerInner = document.querySelector('.header__inner');
let sticky = headerInner.scrollTop;
let accordionMain = document.querySelector('.accordion');
let accordionItem = document.querySelectorAll('.accordion__item')


// accordion shower
accordionMain.addEventListener('click', () => {

    if (event.target.dataset.number === 'number1') {
        accordionItem[0].classList.toggle('active');

    } else if (event.target.dataset.number === 'number2') {
        accordionItem[1].classList.toggle('active');

    } else if (event.target.dataset.number === 'number3') {
        accordionItem[2].classList.toggle('active');
    }
});

// nav shower
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

    navActive.addEventListener('click', function(event) {
        console.log(event.target);
        navActive.style.display = '';
        navtoggle.classList.remove('active');
        }
    )
})
    

// nav remover
function NavStyleRemover(windowSize) {
    if (windowSize.matches) { // If the media request matches
        navActive.style.display = "";
    } else {}
}

NavStyleRemover(windowSize);
windowSize.addEventListener('change', NavStyleRemover);

// header holder
window.onscroll = function() {scrollInspector()};

function scrollInspector() {
    if (window.scrollY > sticky) {
        headerInner.classList.add("header_fixed-large");
        headerLine.classList.add("header_line");
    } else {
        headerInner.classList.remove("header_fixed-large");
        headerLine.classList.remove("header_line");
    }
}

