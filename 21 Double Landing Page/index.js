const main = document.querySelector(".main");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => {
  main.classList.add("active-left");
});

left.addEventListener("mouseleave", () => {
  main.classList.remove("active-left");
});

right.addEventListener("mouseenter", () => {
    main.classList.add("active-right");
  });
  
  right.addEventListener("mouseleave", () => {
    main.classList.remove("active-right");
  });
