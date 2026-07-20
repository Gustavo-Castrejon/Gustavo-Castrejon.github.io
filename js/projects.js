const filterButtons = document.querySelectorAll('.filter-bar button');
const projectCards = Array.from(document.querySelectorAll('.project-card'));
const projectsContainer = document.querySelector('.projects-list');

function getRank(card, filter) {
    if (filter === 'all') {
        return parseInt(card.dataset.rankAll || '999', 10);
    }
    const prop =
        filter === 'hardware'
            ? 'rankHardware'
            : filter === 'software'
                ? 'rankSoftware'
                : 'rankResearch';
    return parseInt(card.dataset[prop] || '999', 10);
}

function applyFilter(filter) {
    // Filter + sort cards by rank for the chosen filter
    const visibleCards = projectCards
        .filter(card => filter === 'all' || card.dataset.category === filter)
        .sort((a, b) => getRank(a, filter) - getRank(b, filter));

    const hiddenCards = projectCards.filter(card =>
        !(filter === 'all' || card.dataset.category === filter)
    );

    // Clear and re-append in sorted order
    projectsContainer.innerHTML = '';
    visibleCards.forEach(card => {
        card.style.display = 'flex';
        projectsContainer.appendChild(card);
    });
    hiddenCards.forEach(card => {
        card.style.display = 'none';
        projectsContainer.appendChild(card);
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        applyFilter(filter);
    });
});

// Initial layout
applyFilter('all');
