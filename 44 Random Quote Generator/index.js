const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btn.innerText = "Loading...";
    btn.disabled = true;
    quote.innerText = "Updating...";
    author.innerText = "Updating...";

    const responce = await fetch(apiURL);
    const data = await responce.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;

    quote.innerText = quoteContent;
    author.innerText = "~ " + quoteAuthor;

    btn.innerText = "Get a Qoute";
    btn.disabled = false;
  } catch (error) {
    console.log(error);

    quote.innerText = "an error happened, try again later";
    author.innerText = "an error happened";

    btn.innerText = "Get a Qoute";
    btn.disabled = false;
  }
}

getQuote();

btn.addEventListener("click", getQuote);
