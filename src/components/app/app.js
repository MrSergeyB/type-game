import React from 'react';
import Header from '../header';
import './app.css';
import GameDisplay from '../game-display';
import TypeState from '../context/type-state';

const App = () => {
  return (
    <TypeState>
      <div>
        <Header />
        <div className='wrapper'>
          <GameDisplay />
        </div>
      </div>
    </TypeState>
  );
};

export default App;
