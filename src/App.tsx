import PokemonCard from "./components/PokemonCard";

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
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
    </div>
  );
}

export default App;
