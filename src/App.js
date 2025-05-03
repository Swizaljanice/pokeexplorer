import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemons(pokemonDetails);
        setFiltered(pokemonDetails);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon data.');
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    let results = pokemons;

    if (searchTerm) {
      results = results.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      results = results.filter((p) =>
        p.types.some((t) => t.type.name === selectedType)
      );
    }

    setFiltered(results);
  }, [searchTerm, selectedType, pokemons]);

  return (
    <div className="container">
      <Header />
      <div className="filters">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="status">No Pokémon found.</p>
      )}
      <div className="card-grid">
        {filtered.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
