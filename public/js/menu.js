document.addEventListener('DOMContentLoaded', function() {
    console.log("jsLoaded")
    const hamburgerMenu = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active')
        navMenu.classList.toggle('show');
    })
})