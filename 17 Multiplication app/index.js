const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById("question");
const form = document.getElementById("form");
const input = document.getElementById("input");
const scoreE = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

question.innerText = `What is ${num1} multiply by ${num2}?`;
scoreE.innerText = `score: ${score}`;

const correctAns = num1 * num2;

form.addEventListener("submit", () => {
  const userAns = +input.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
