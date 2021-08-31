import React from 'react';
import Pokedex from './components/Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <main>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons}/>
      </main>
    )
  };
}

export default App;
