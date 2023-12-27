const counter = document.querySelectorAll(".counter");
const yy = document.querySelector(".yy");

counter.forEach((counter) => {
  counter.innerText = "0";

  incrementCounter();
  function incrementCounter() {
    let currentNum = +counter.innerText;
    const dataCeil = counter.getAttribute("data-ceil");
    // console.log(dataCeil);
    const increment = dataCeil / 15;
    currentNum += Math.floor(increment);

    if( currentNum < dataCeil ) {
        counter.innerText = currentNum;
        setTimeout(incrementCounter, 50)
    } else {
        counter.innerText = dataCeil;
    }
  }
});
