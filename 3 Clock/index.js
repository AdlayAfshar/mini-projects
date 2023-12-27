const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

console.log(second)

function updateClock() {
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();
    const s = currentDate.getSeconds();
    const hourDeg = (h / 12) * 360;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (m / 60) * 360;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (s / 60) * 360;
    second.style.transform = `rotate(${secondDeg}deg)`;
    
}


updateClock();
// setInterval(updateClock, 1000); => i think its bad way