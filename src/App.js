import React from 'react';
import './App.css';
import logo from './assets/KIRILICATA.png'
import { ShloKontainer } from './shlokontainer';

function App() {
  return (
    <div className="App">
      <h3 className="title is-size-3 has-text-black is-family-sans-serif outlined">Шлокавица транслитератор</h3>
      <header className="App-header">
        <div className="App-logo" >
          <img src={logo} alt="logo" />
        </div>
      </header>
      <ShloKontainer />
    </div>
  );
}

export default App;
