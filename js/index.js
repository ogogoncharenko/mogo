let navtoggle = document.querySelector('.nav-toggle');
let navActive = document.querySelector('.nav_active');
let navLinks = document.querySelectorAll('.nav__link');
let navToggleItem = document.querySelector('.nav-toggle__item');

let windowSize = window.matchMedia("(min-width: 770px)");
let headerLine = document.querySelector('.header');
let headerInner = document.querySelector('.header__inner');
let sticky = headerInner.scrollTop;

let accordionMain = document.querySelector('.accordion');
let accordionItem = document.querySelectorAll('.accordion__item')

// accordion shower
accordionMain.addEventListener('click', accordionController);

function accordionController(e){
    let target = e.target;
    if (target.dataset.number === 'number1') {
        accordionItem[0].classList.toggle('active');

    } else if (target.dataset.number === 'number2') {
        accordionItem[1].classList.toggle('active');

    } else if (target.dataset.number === 'number3') {
        accordionItem[2].classList.toggle('active');
    }
};

// nav shower
document.addEventListener('click', navController);

function navController(e){
    let target = e.target;
    if (target == navtoggle || target == navToggleItem){
        console.log("navtoggle or navToggleItem");
        navtoggle.classList.toggle('active');
        navActive.classList.toggle('nav_activ_btn');
    }
    else if(target !== navtoggle && target !== navToggleItem){
        navtoggle.classList.remove('active');
        navActive.classList.remove('nav_activ_btn');
    }
}
    

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

