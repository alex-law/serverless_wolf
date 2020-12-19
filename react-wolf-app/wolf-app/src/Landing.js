import './App.css';
import { Component } from 'react';
import { useState } from 'react';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          A game of deceit and intrigue.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to play
        </a>
      </header>
    </div>
  );
}

function myFunctionalComponentFunction() {
    const [input, setInput] = useState(''); // '' is the initial state value
    return (
      <div>
      <label>Please specify:</label>
      <input value={input} onInput={e => setInput(e.target.value)}/>
      </div>
    );
  }

{/* <button onClick={this.loadCityInfo} data-city={this.props.info.name}>{this.props.info.name}</button>

https://pokeapi.co/api/v2/pokemon/snorlax

loadCityInfo: function(e){
    var city = $(e.currentTarget).data('city');
    // now make your ajax request with the city's name passed to pull out the correct data
}

export default App; */}
