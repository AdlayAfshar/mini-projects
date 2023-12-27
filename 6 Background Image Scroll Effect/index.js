const bgImage = document.getElementById('bg-img');

window.addEventListener('scroll', () => {
    updateImg();
});

function updateImg() { 
    // bgImage.style.opacity = 1 - window.pageYOffset / 800 
    bgImage.style.opacity = 1 - window.scrollY / 2000;
    bgImage.style.backgroundSize = 160 - window.scrollY/ 12 + '%';

    console.log(window.scrollY, 1 - window.scrollY / 800);

    // window.scrollY / 800; 
}


 