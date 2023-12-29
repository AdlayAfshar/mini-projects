const currencyFirst = document.getElementById("currency-first");
const currencySecond = document.getElementById("currency-second");
const worthFirst = document.getElementById("worth-first");
const worthSecond = document.getElementById("worth-second");
const exchange = document.getElementById("exchange");

function updateRate() {

}

currencyFirst.addEventListener('change', updateRate);
currencySecond.addEventListener('change', updateRate);

worthFirst.addEventListener('change', updateRate);
worthSecond.addEventListener('change', updateRate);
