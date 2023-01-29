import React, { useEffect } from "react";
import PokemonCard from "../Pokemones/PokemonCard";
import { useState } from "react";

function Home() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
async function getAllPokemons (){
    setIsLoading(true);
    const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
    const data = await result.json();
    const pokemonArray = [];
    const pokemonPromises = data.results.map(async (pokemon)=>{
      const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json();
      pokemonArray.push(data);
    });
    await Promise.all(pokemonPromises);
    setPokemons(pokemonArray);
    setIsLoading(false);
    await pokemons.sort(function(a, b){
      return a.id - b.id ;
      
    })
    
}


useEffect(() => {
  getAllPokemons();
  console.log(pokemons);
}, [])
  return (

    <section className="home-section">
      {isLoading ? <div> Loading... </div> : pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} name={pokemon.name} url={pokemon.url} img={pokemon.sprites.front_default} height={pokemon.height} stats={pokemon.stats} weight={pokemon.weight} abilities={pokemon.abilities} />
      ))}


      
    </section>
  );


}
export default Home;
