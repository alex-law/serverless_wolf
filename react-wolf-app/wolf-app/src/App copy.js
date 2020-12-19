import logo from './method-draw-image.svg';
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          A game of deceit and intrigue.
        </p>
        <a
          className="App-link"
          href="./Landing.js"
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

export default App;
