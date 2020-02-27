import React, {useReducer} from 'react';
import TypeContext from './type-context';
import TypeReducer from './type-reducer';

import {
  INCREASE_SCORE,
  ADD_TIME,
  SET_DIFFICULTY,
  RESTART_GAME,
  SET_CURRENT_WORD,
  TOGGLE_GAME_STARTED
} from './types.js';

const TypeState = props => {
  const initialState = {
    score: 0,
    currentWord: '',
    timeLeft: 10,
    difficulty: 'easy',
    gameStarted: false
  };

  const [state, dispatch] = useReducer(TypeReducer, initialState);

  //Set current word
  const setCurrentWord = word => {
    dispatch({type: SET_CURRENT_WORD, payload: word});
  };

  //Set difficulty
  const setDifficulty = level => {
    dispatch({type: SET_DIFFICULTY, payload: level});
  };

  //Toggle gameStarted
  const toggleGameStarted = () => {
    dispatch({type: TOGGLE_GAME_STARTED});
  };

  //   //Check input value
  // const checkInput = inputValue => {

  //     dispatch({type: })
  // }

  return (
    <TypeContext.Provider
      value={{
        score: state.score,
        tymeLeft: state.timeLeft,
        currentWord: state.currentWord,
        difficulty: state.difficulty,
        gameStarted: state.gameStarted,
        setCurrentWord,
        setDifficulty,
        toggleGameStarted
      }}
    >
      {props.children}
    </TypeContext.Provider>
  );
};

export default TypeState;
