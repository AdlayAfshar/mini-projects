const menu = document.querySelector('.menu');
const p = document.querySelector('.menu p');
const socialList = document.querySelector('.social-list');
const lis = document.querySelectorAll('.social-list li');
console.log(lis);

menu.addEventListener('click', () => {
    socialList.classList.toggle('hide');
    menu.classList.toggle('rotate');
})

lis.forEach(li => {
    li.addEventListener('click', () => {
        p.innerHTML = li.innerHTML;
        socialList.classList.add('hide');
        menu.classList.remove('rotate');
    })
});