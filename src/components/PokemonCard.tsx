interface pokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: pokemon) {
  return (
    <figure>
      {imgSrc ? <img src={imgSrc} /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
