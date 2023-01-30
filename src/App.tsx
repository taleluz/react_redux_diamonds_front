import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Diamond } from './features/counter/diamond/Diamond';
import { ShowQus } from './features/counter/diamond/ShowQus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Diamond></Diamond>
        <ShowQus></ShowQus>
      </header>
    </div>
  );
}

export default App;
