const btnE = document.querySelector(".btn");
const inputE = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btnE.addEventListener("click", () => {
  createPassword();
  alertContainer.classList.add("active");
});

copyIcon.addEventListener("click", () => {
  copyPassword();
  if (inputE.value) {
    alertContainer.classList.remove("active");
    setTimeout(() => {
      alertContainer.classList.add("active");
    }, 3000); 
  }
});

function createPassword() {
  const chars =
    "0123456789qwertyuiopasdfghjklzxcvbnm!@£$%^&*()_+=-}{[]:;#€QWERTYUIOPASDFGHJKLZXCVBNM";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, randomNum + 1, password);
  }
  inputE.value = password;

}

function copyPassword() {
  inputE.select();
  inputE.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputE.value);
  alertContainer.innerText = inputE.value + "  copied!";
}
