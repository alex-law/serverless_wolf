import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  
    const poke_url = 'https://pokeapi.co/api/v2/pokemon/' + this.state.term;
    fetch(poke_url)
      .then(p_response => p_response.json())
      .then(p_data => this.setState({ term:'', pokemon_text: JSON.stringify(p_data, null, 2)}))
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        <img src={this.state.img} height="200" alt={this.state.term} />
        <p>{this.state.pokemon_text}</p>
      </div>
    );
  }
}

export default App;