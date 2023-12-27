const main = document.querySelector(".main");
const btn = document.querySelector(".btn");
// const yy = document.querySelector('yy');

btn.addEventListener("click", () => {
  console.log("clicked!");
  imgNum = 10;
  addNewImages();
});

function addNewImages() {
    for (let i = 0; i < imgNum; i++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(
          Math.random() * 2000
        )}`;
        main.appendChild(newImg);
        
    }
}
