const inputs = document.querySelectorAll(".input");

function calculateLoan() {
  laoanAmountValue = document.getElementById("loan-nount").value;
  intrestRateValue = document.getElementById("intrested-rate").value;
  monthsToPay = document.getElementById("months-to-pay").value;

  intrest = (laoanAmountValue * (intrestRateValue * 0.1)) / monthsToPay;
  monthlyPayment = (laoanAmountValue / monthsToPay + intrest).toFixed(2);

  document.getElementById(
    "peyment"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
