// --------------------
// nav toggle
// --------------------

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

// --------------------
// change display data on 'the team'
// --------------------

const teamData = [
    {
        name: 'Spencer',
        description: 'Spencer is a well rounded barber with a lot of experience with short hair, he has been taught from a young age and has grown in the barber industry.',
        number: '07999 000000',
        email: 'spencer@email.com'
    },
    {
        name: 'Paul',
        description: 'Paul is a very experienced stylist who has an educational background, has taken travelled across and learned various techniques during his years in the field.',
        number: '07888 000000',
        email: 'paul@email.com'
    },
    {
        name: 'Paula',
        description: 'Paula has experience as a stylist for women and men, a well rounded and experienced invidivual who strives to develop her skills and perform as best to her capabilities.',
        number: '07777 000000',
        email: 'paula@email.com'
    }
]

const teamName = document.querySelector('#team-name')
const teamDescription = document.querySelector('#team-description')
const teamNumber = document.querySelector('#team-number')
const teamEmail = document.querySelector('#team-email')
const teamList = document.querySelectorAll('.team-list-item')

// changes data in the team section to the selected member
const changeTeamData = (e, i) => {
    if (e.classList.contains('selected')) return
    teamList.forEach(e => e.classList.remove('selected'))
    e.classList.add('selected')
    const member = teamData[i]
    teamName.innerHTML = member.name
    teamDescription.innerHTML = member.description
    teamNumber.innerHTML = member.number
    teamEmail.innerHTML = member.email
}

// listening to clicks on all of the team members
teamList.forEach((e, i) => {
    e.addEventListener('click', () => changeTeamData(e, i))
})

// --------------------
// change bg-img-container img if the team is on screen
// --------------------

const bgImg = document.querySelector('#bg-img')

const img1 = './img/barber-shop-mobile.jpg'
const img2 = './img/bg-products.jpg'

const observerBG = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // add new bg
            bgImg.src = img2
            return
        }
        // replace with old bg img
        bgImg.src = img1
    })
})

observerBG.observe(document.querySelector('.team'))