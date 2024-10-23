const pokemonList = [
  {
    name: "gengar",

    imgSrc:
      "https://www.pngplay.com/wp-content/uploads/11/Gengar-PNG-Background.png",
  },

  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[1];
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
