const currencyFirst = document.getElementById("currency-first");
const currencySecond = document.getElementById("currency-second");
const worthFirst = document.getElementById("worth-first");
const worthSecond = document.getElementById("worth-second");
const exchange = document.getElementById("exchange");

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/7953bfcc291e10306da483cf/latest/${currencyFirst.value}`
  )
    // if we use {}, we must return
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      const rate = data.conversion_rates[currencySecond.value];
      console.log(rate);
      exchange.innerText = `1 ${currencyFirst.value} = ${
        rate + "" + currencySecond.value
      }`;

      worthSecond.value = (worthFirst.value * rate).toFixed(3);
    });
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);

worthFirst.addEventListener("change", updateRate);
worthSecond.addEventListener("change", updateRate);
