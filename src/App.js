import React, { useEffect, useState } from 'react'
import api_poke from './api';
import { Pokemon } from './Pokemon';

function App() {

  const [ pokemonApiJson, setPokemonApiJson ] = useState([]);

  async function getPokeApiJson(){
    const res = await api_poke.get('/pokemon');
    setPokemonApiJson(res.data)
  }

  useEffect(()=> {
    getPokeApiJson()
  },[])

  return (
    <Pokemon props={pokemonApiJson} />
  );
}

export default App;
