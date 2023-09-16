const renderPokemon = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/pokemons");
  const data = await response.json();
  const pokemonContent = document.getElementById("pokemon-content");
  let pokemon;
  pokemon = data.find((pokemon) => pokemon.id === requestedID);
  if (pokemon) {
    document.getElementById("image").src = pokemon.image.thumbnail;
    document.getElementById("name").textContent = pokemon.name.english;
    document.getElementById("type").textContent = "Type: " + pokemon.type;
    document.getElementById("description").textContent = pokemon.description;
    document.title = `Pokemon - ${pokemon.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Pokemon Available 😞";
    pokemonContent.appendChild(message);
  }
};

renderPokemon();
