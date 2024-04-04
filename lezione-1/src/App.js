import React from 'react'
import logo from './logo.svg';
import './App.css';

import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card color="red" padding="pad-30" name="Andrea" cognome="Verdi"/>
      </header>
    </div>
  );
}

export default App;
