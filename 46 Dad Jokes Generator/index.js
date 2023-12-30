const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

const apiKey = "fiCOvI8CvyNJm2/JoEvooA==G1f7j45Xca6OHIyi";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getJoke() {
  try {
    joke.innerText = "Updating...";
    btn.disabled = true;
    btn.innerText = "Loading...";

    const responce = await fetch(apiURL, options);
    const data = await responce.json();

    btn.disabled = false;
    btn.innerText = "Tell me a joke";

    joke.innerText = data[0].joke;
  } catch (error) {
    joke.innerText = "an error happened";
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
    console.log(error);
  }
}

btn.addEventListener("click", getJoke);
