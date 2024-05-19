import React, { useState } from 'react';
import './App.css';
import Person from './components/Person';
import MusicPlayerSlider from './components/MusicPlayerSlider';
import CustomizedRating from './components/Rating';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const fetchPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch response");
        }
        return response.json();
      })
      .then(data => {
        setPokemonData(data);
        setError(null);
      })
      .catch(error => {
        setError(error.message);
        setPokemonData(null);
      });
  };

  const cynthia = {
    name: "Cynthia",
    age: 28,
    pokemon: "Garchomp",
    email: "cynthia@notrealemail.com",
    isMarried: false,
  };

  const alder = {
    name: "Alder",
    age: 60,
    pokemon: "Volcarona",
    email: "alder@notrealemail.com",
    isMarried: true,
  };

  const steven = {
    name: "Steven",
    age: 25,
    pokemon: "Metagross",
    email: "steven@notrealemail.com",
    isMarried: false,
  };

  const mustard = {
    name: "Mustard",
    age: 74,
    pokemon: "Urshifu",
    email: "mustard@notrealemail.com",
    isMarried: true,
  };

  return (
    <>
        <ul class="topnav">
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#blog">Blog</a></li>
          <li class="right"><a href="#contact">Contact</a></li>
        </ul>
        <h1>A Pokemon Fansite</h1>
      <MusicPlayerSlider></MusicPlayerSlider>

      <div className='pokemonDictionary'>
        <input 
          type="text" 
          id="pokemonName" 
          placeholder="Enter Pokemon Name"
          value={pokemonName}
          onChange={handleInputChange}
        />
        <br></br><br></br>
        <button onClick={fetchPokemonData}>Fetch Pokemon</button><br></br>
        {error && <p>Error: {error}</p>}
        {pokemonData && (
          <>
            <h3>{pokemonData.name}</h3>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} id="pokemonSprite" />
          </>
        )}
        <CustomizedRating></CustomizedRating>
      </div>

      <h3>Notable Champions</h3>
      <div className='trainer1'>
        <Person person={cynthia} />
      </div>
      <div className='trainer2'>
        <Person person={alder} />
      </div>
      <div className='trainer3'>
        <Person person={steven} />
      </div>
      <div className='trainer4'>
        <Person person={mustard} />
      </div>
    </>
  );
}

export default App;