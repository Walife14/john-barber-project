
// nav toggle

const hamburger = document.querySelector('.hamburger')
const navElement = document.querySelector('nav')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-link')

// toggles navbar on and off
const toggleNav = () => {
    if (hamburger.classList.contains('navbar-x')) {
        hamburger.classList.remove('navbar-x')
        navbar.classList.remove('show')
        navElement.style.position = 'absolute'
    }
    else {
        navbar.classList.add('show')
        hamburger.classList.add('navbar-x')
        navElement.style.position = 'fixed'
    }
}

navLinks.forEach(e => {
    e.addEventListener('click', toggleNav)
})

hamburger.addEventListener('click', toggleNav)