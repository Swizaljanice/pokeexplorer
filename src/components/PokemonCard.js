import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className="card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="card-img"
      />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>ID: #{pokemon.id}</p>
      <div className="types">
        {pokemon.types.map((t) => (
          <span key={t.type.name} className={`type ${t.type.name}`}>
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
