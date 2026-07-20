function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 40) {
        header.classList.add('solid');
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
        header.classList.remove('solid');
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
