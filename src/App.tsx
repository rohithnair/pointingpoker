import React from 'react';
import StartSession from "./StartSession";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Pointing Poker
        </p>
      <StartSession></StartSession>

      </header>
    </div>
  );
}

export default App;
