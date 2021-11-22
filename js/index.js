let navtoggle = document.querySelector('.nav-toggle');
let navActive = document.querySelector('.nav_active');
let windowSize = window.matchMedia("(min-width: 770px)")

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
}})

function NavStyleRemover(windowSize) {
    console.log(windowSize);
    if (windowSize.matches) { // Если медиа запрос совпадает;
        navActive.style.display = "";
    } else {
        console.log('remove');
    }
}

NavStyleRemover(windowSize);
windowSize.addListener(NavStyleRemover);
