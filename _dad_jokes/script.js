// 1. Get the button and the joke element
const BtnJoke = document.getElementById("jokeBtn");
const Joke = document.getElementById("joke");

// 2. Add an event listener to the button
BtnJoke.addEventListener("click", generateJoke);

// 3. Create a function to generate the joke
generateJoke();

// 4. Fetch the joke from the API
function generateJoke() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    // 5. Display the joke on the page
    .then((data) => (Joke.innerHTML = data.joke));
}

// link to the API
// 'https://icanhazdadjoke.com'
