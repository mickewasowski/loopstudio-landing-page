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
    let navTag = document.getElementById('nav-tag');
    let logo = document.getElementById('mobile-logo');

    if (navTag.style.display === '') {
        console.log('here');
        navContainer.style.display = "flex";
        logo.style.display = 'flex';
        navTag.style.display = 'flex';
    } else if (navTag.style.display === 'flex') {
        navContainer.style.display = "none";
        logo.style.display = 'none';
        navTag.style.display = '';
    }
}