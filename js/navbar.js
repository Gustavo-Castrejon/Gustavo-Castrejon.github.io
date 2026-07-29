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

// Light / dark theme toggle
(function () {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('.theme-toggle-icon');

    function applyIcon(theme) {
        icon.textContent = theme === 'light' ? '☀' : '☽';
    }

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    applyIcon(currentTheme);

    toggle.addEventListener('click', function () {
        const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        applyIcon(theme);
    });
})();
