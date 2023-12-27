const btnE = document.querySelector('.btn');

btnE.addEventListener('mouseover', (e) => {
    console.log(e.pageX - btnE.offsetLeft);
    const x = (e.pageX - btnE.offsetLeft);
    const y = (e.pageY - btnE.offsetTop);

    btnE.style.setProperty('--xPos', x + 'px');
    btnE.style.setProperty('--yPos', y + 'px');
})