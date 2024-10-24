import { MouseEventHandler } from "react";

interface Pokemon {
  name: string;

  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  plus: MouseEventHandler;
  moins: MouseEventHandler;

  setPokemonIndex: (index: number) => void;

  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, pokemonList, plus, moins }: NavBarProps) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button type="button" onClick={plus}>
          Précédent
        </button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={moins}>
          Suivant
        </button>
      ) : null}
      <p>{pokemonIndex}</p>
    </div>
  );
}

export default NavBar;
