const body = document.querySelector("body");
const input = document.querySelector(".input");
// const yy = document.getElementById('dark-mode');
// const cc = document.getElementById('cc');

input.checked = JSON.parse(localStorage.getItem('mode'));
updateBody();

function updateBody() {
  if (input.checked) {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
}

input.addEventListener('input', () => {
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(input.checked))
  }