
// nav toggle

const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')

const toggleNav = () => {
    if (hamburger.classList.contains('navbar-x')) {
        hamburger.classList.remove('navbar-x')
        navbar.classList.remove('show')
    }
    else {
        navbar.classList.add('show')
        hamburger.classList.add('navbar-x')
    }
}

hamburger.addEventListener('click', toggleNav)