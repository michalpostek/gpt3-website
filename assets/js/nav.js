const nav = document.getElementById('nav');
const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMenuLinks = document.querySelectorAll('.nav__dropdown-menu__link');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 150) {
        nav.classList.add('nav--scrolled');
    } else {
        nav.classList.remove('nav--scrolled');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        dropdownMenu.classList.add('hidden');
        toggleMenuBtn.classList.remove('active');
    }
});

toggleMenuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    toggleMenuBtn.classList.toggle('active');
});

dropdownMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.add('hidden');
        toggleMenuBtn.classList.remove('active');
    });
});
