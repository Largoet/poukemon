import PokemonCard from "./components/pokemoncard";

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

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}

export default App;
