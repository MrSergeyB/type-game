import React, {useContext, useState} from 'react';
import TypeContext from '../context/type-context';
import './random-word.css';
const arrayOfWords = [
  'あし',
  'かかと',
  'すね',
  'ひざ',
  'もも',
  'あたま',
  'かお',
  'くち',
  'くちびる',
  'は',
  'はな',
  'め',
  'ひげ',
  'かみ',
  'みみ',
  'おなか',
  'かた',
  'つめ',
  'て',
  'てくび',
  'てのひら',
  'ゆび',
  'しり',
  'おなか',
  'かんぞう',
  'きも',
  'きんにく',
  'くび',
  'こころ',
  'こし',
  'しんぞう',
  'せなか',
  'ち',
  'にく',
  'はだ',
  'むね',
  'かぜ'
];

const RandomWord = () => {
  const typeContext = useContext(TypeContext);
  const [button, setToggleButton] = useState(true);
  const {setCurrentWord, currentWord, toggleGameStarted} = typeContext;

  const getRandomWord = () => {
    let index = Math.floor(Math.random() * Math.max(arrayOfWords.length));
    setCurrentWord(arrayOfWords[index]);
    setToggleButton(!button);
    toggleGameStarted();
  };

  return (
    <div className='random-word'>
      {button ? (
        <button onClick={() => getRandomWord()}>Start game</button>
      ) : null}
      <p>Type the following:</p>
      <h2>{currentWord}</h2>
    </div>
  );
};

export default RandomWord;
