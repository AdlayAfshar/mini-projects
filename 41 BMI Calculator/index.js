const btn = document.getElementById("btn");
const bmiInput = document.getElementById("result");
const weightCondition = document.getElementById("weight-condition");

const xx = document.querySelector(".xx");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);
  bmiInput.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.innerText = "Over Weight";
  } else if (bmiValue >= 30) {
    weightCondition.innerText = "Obrsity";
  }
}

btn.addEventListener("click", calculateBMI);
