import React, {useState, useContext} from 'react';
import TypeContext from '../context/type-context';
import './input.css';

const Input = () => {
  const [inputValue, setValue] = useState('');
  const typeContext = useContext(TypeContext);
  const {setCurrentWord} = typeContext;

  return (
    <div className='input'>
      <form id='myform' className='form'>
        <input
          value={inputValue}
          type='text'
          placeholder='Type the word here... '
          autoFocus='autofocus'
          onChange={e => {
            setValue(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default Input;
