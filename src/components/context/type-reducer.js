import {
  INCREASE_SCORE,
  ADD_TIME,
  SET_DIFFICULTY,
  RESTART_GAME,
  SET_CURRENT_WORD,
  TOGGLE_GAME_STARTED
} from './types.js';

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: action.payload
      };

    case TOGGLE_GAME_STARTED:
      return {
        ...state,
        gameStarted: !state.gameStarted
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload
      };
    case RESTART_GAME:
      return {};
    default:
      return state;
  }
};
