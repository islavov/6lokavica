import React from 'react';
import './App.css';
import logo from './assets/KIRILICATA.png'
import { ShloKontainer } from './shlokontainer';

function App() {
  return (
    <div className="App">
      <h3>Шлокавица транслитератор</h3>
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
