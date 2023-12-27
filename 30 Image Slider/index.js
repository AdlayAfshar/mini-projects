// const container = document.querySelector(".slider-container");
const imgContainer = document.querySelector(".img-container");
const imgs = document.querySelectorAll("img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentImg = 1;
let timeOut;

next.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeOut)
  updateImg();
});

prev.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeOut)
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }
  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
