const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".fa-xmark");

bars.addEventListener('click', () => {
    sidebar.classList.toggle('show');
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
})