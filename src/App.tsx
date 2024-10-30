import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  useEffect(() => {
    alert("Hello Pokemon Trainer :)");
  }, []);

  return (
    <div>
      <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
      />

      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
    </div>
  );
}

export default App;
