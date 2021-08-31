import React from 'react';
import Pokedex from './components/Pokedex';
import './App.css';
import pokemons from './Data';

class App extends React.Component {
  render() {
    return(
      <main className='App'>
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </main>
    )
  };
}

export default App;
