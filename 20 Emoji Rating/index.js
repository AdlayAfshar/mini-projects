const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-regular");
const colors = ["red", "orange", "lightblue", "lightgreen", "green"];

// console.log(stars);

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  stars.forEach((st, idx) => {
    console.log(idx);
    if (idx < index + 1) {
      st.classList.add("active");
    } else {
      st.classList.remove("active");
    }
  });

  emojis.forEach((emoji) => {
    emoji.style.transform = `translateX(-${index * 50}px)`;
    emoji.style.color = colors[index]
  });
}
