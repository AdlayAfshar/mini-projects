const main = document.querySelector('.main');
const btn = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');

btn.addEventListener('click', () => {
    main.classList.add('active');
    popup.classList.remove('active');
})

closeIcon.addEventListener('click', () => {
    popup.classList.add('active');
    main.classList.remove('active');
})