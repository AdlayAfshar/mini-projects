const counter = document.querySelector(".counter");
const bar = document.querySelector(".loading-bar-front");

let idx = 0;
updateNum();

function updateNum() {
  counter.innerText = idx + "0%";
  bar.style.width = idx + "0%";

  idx++;

  if (idx < 11) {
    setTimeout(updateNum, 20);
  }
}
