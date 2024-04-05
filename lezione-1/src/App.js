import React from 'react'
import './App.css';
import logo from './logo.svg';
import Clock from './components/Clock';
// import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock/>
        {/* <Card color="red" padding="pad-30" name="Andrea" cognome="Verdi"/> */}
      </header>
    </div>
  );
}

export default App;