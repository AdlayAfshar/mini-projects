const container = document.querySelector('.container');


for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement('div');
    colorContainer.classList.add('color-Container');
    container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll('.color-Container');

generateColor();

function generateColor() {
    colorContainers.forEach((colorContainer) => {
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = '#' + newColorCode;
        colorContainer.innerText = '#' + newColorCode;
    })
}

function randomColor() {
    const chars = '0123456789abcdef'
    const colorCodeLength = 6;
    let colorCode = '';
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    //  console.log(randomNum, randomNum + 1);
    }
    return colorCode;
}