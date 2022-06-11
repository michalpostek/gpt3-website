const nav = document.getElementById('nav');
const target = document.getElementById('home');

const toggleNav = isIntersecting => {
    isIntersecting
        ? nav.classList.remove('nav--scrolled')
        : nav.classList.add('nav--scrolled');
}

const callback = entries => {
    const { isIntersecting } = entries[0];

    toggleNav(isIntersecting);
}

const options = { threshold: 0.9 };

const observer = new IntersectionObserver(callback, options);

observer.observe(target);
