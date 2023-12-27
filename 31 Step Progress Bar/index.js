// container
// progress-container
// progress-bar-back

// const xx = document.querySelector('.xx');
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const steps = document.querySelectorAll(".step");
const progress = document.querySelector(".progress-bar-front");

let currentChecked = 1;

next.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > steps.length) {
    currentChecked = steps.length;
  }

  updateStepProgress();
});

prev.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  steps.forEach((step, index) => {
    if (index < currentChecked) {
      step.classList.add("checked");
      step.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <small>${
              index === 0
                ? "Start"
                : index === steps.length - 1
                ? "Final"
                : "Step" + index
            }</small>`;
    } else {
      step.classList.remove("checked");
      step.innerHTML = `
            <i class="fa-solid fa-xmark"></i>`;
    }
  });

  const checkedNum = document.querySelectorAll(".checked");
  progress.style.width =
    ((checkedNum.length - 1) / (steps.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prev.disabled = true;
  } else if( currentChecked === steps.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
