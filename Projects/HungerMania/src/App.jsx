import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Header from './Components/Header';
import { SearchContext } from './Components/SearchContext';
import { useState } from 'react';

function App() {
  const [userSearch, setUserSearch] = useState('');

  return (
    <SearchContext.Provider value={{ userSearch, setUserSearch }}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;
