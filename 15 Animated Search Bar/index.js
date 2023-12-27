const searchBar = document.querySelector('.main');
const magnifier = document.querySelector('.magnifier');

magnifier.addEventListener('click', () => {
    searchBar.classList.toggle('active');
})