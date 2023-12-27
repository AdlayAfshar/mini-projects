const container = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Painter"];
let careerIndex = 0;

// container.innerHTML = `<h1>I am a ${careers[careerIndex]}.</h1>`;

let charIndex = 0;

updateText();

function updateText() {
  charIndex++;
  container.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
    0,
    charIndex
  )}.</h1>`;

  if (charIndex === careers[careerIndex].length) {
    careerIndex++;
    charIndex = 0;
  }

  if (careerIndex === careers.length) {
    charIndex = 0;
  }
  setTimeout(updateText, 400);
}
