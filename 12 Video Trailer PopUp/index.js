const btnE = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');
const trailerE = document.querySelector('.trailer');
const video = document.querySelector('video');

btnE.addEventListener('click', () => {
    trailerE.classList.remove('active');
})

closeIcon.addEventListener('click', () => {
    trailerE.classList.add('active');
    video.pause();
    video.currentTime = 0;
})