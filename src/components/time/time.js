import React, {useContext, useState} from 'react';
import './time.css';
import TypeContext from '../context/type-context';

const Time = props => {
  const typeContext = useContext(TypeContext);
  const {gameStarted, toggleGameStarted, difficulty} = typeContext;
  const [additionalSec, setAdditionalSec] = useState(5);
  const [seconds, setSeconds] = useState(10);

  const startCounting = () => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(interval);
      toggleGameStarted();
    }
  };

  if (gameStarted) {
    startCounting();
  }

  return (
    <div className='Time'>
      <p>Time left: {seconds} s</p>
    </div>
  );
};

export default Time;
