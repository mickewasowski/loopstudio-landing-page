function changeBackgroundOpacity() {
    let currentTarget = event.target;

    if (currentTarget.tagName === 'DIV') {
        let backdrop = Array.from(currentTarget.children);
        backdrop[0].style.display = 'block';
    }
    // } else if (currentTarget.tagName === 'H3') {
    //     let backdrop = currentTarget.previousSibling.previousSibling;
    //     console.log(backdrop)
    // }
}

function removeBackdrop() {
    let currentTarget = event.target;

    if (currentTarget.tagName === 'DIV') {
        let backdrop = Array.from(currentTarget.children);
        backdrop[0].style.display = 'none';
    }
}