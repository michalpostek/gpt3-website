const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMenuLinks = document.querySelectorAll('.nav__dropdown-menu__link');

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
