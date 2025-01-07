document.getElementById('jokeBtn').addEventListener('click', fetchJoke);

async function fetchJoke() {
  const jokeElement = document.getElementById('joke');
  jokeElement.textContent = "Loading...";
  
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    jokeElement.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    jokeElement.textContent = "Oops! Couldn't fetch a joke. Try again.";
  }
}
