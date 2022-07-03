function changeBackgroundOpacity() {
    let currentTarget = event.target;

    if (currentTarget.tagName === 'DIV') {
        let backdrop = Array.from(currentTarget.children);
        backdrop[0].style.display = 'block';
    }
}

function removeBackdrop() {
    let currentTarget = event.target;

    if (currentTarget.tagName === 'DIV') {
        let backdrop = Array.from(currentTarget.children);
        backdrop[0].style.display = 'none';
    }
}

function toggleNavigation() {
    let navContainer = document.getElementById('navigation-container');
    let logo = document.getElementById('mobile-logo');

    if (navContainer.style.display === 'none') {
        navContainer.style.display = "flex";
        logo.style.display = 'flex';
    } else if (navContainer.style.display === 'flex') {
        navContainer.style.display = "none";
        logo.style.display = 'none';
    }
}