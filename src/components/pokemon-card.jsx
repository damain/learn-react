import "./pokemon-card.css";
function PokemonCard() {
  return (
    <div className="card">
      <div className="card--inner">
        <div className="card--header">
          <div className="card--name"> name goes here </div>
          <div className="card--hp">0HP</div>
        </div>
        image goes here
      </div>
    </div>
  );
}

export default PokemonCard;
