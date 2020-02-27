import React, {useContext} from 'react';
import './header.css';
import TypeContext from '../context/type-context';

const Header = () => {
  const typeContext = useContext(TypeContext);
  const {setDifficulty} = typeContext;

  const handleOnChange = e => {
    setDifficulty(e.target.value);
  };
  return (
    <div className='header'>
      <label htmlFor='difficulty'>Choose difficulty</label>
      <select onChange={handleOnChange} className='difficulty-options'>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
    </div>
  );
};

export default Header;
