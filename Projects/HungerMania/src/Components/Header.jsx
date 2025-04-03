import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import '../Css/Header.css';

const Header = () => {
  const { setUserSearch } = useContext(SearchContext);

  return (
    <div className='headerbox'>
      <Link to='/'>Home</Link>
      <Link to='/Cart'>Cart</Link>
      
      <input
        type="search"
        onChange={(e) => setUserSearch(e.target.value)}
      />

      <Link to='/account'>Account</Link>
    </div>
  );
};

export default Header;
