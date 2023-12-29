const input = document.getElementById("input");
const error = document.getElementById("error");
const result = document.getElementById("result");

let errorTime;
let resultTime;

function updateResults() {
  if (input.value <= 0 || isNaN(input.value)) {
    error.innerText = " Please Enter a Valid Number";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      error.innerHTML = "";
      input.value = "";
    }, 2000);
  } else {
    result.innerText = (+input.value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
        result.innerHTML = "";
        input.value = "";
      }, 10000);
  }
}

input.addEventListener("click", updateResults);
