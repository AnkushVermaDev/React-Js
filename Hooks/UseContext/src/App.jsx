import { useState, createContext } from 'react';
import Grandchild from './components/Grandchild';

// Step 1: Create Context
export const Parents = createContext();

function App() {
  const [count, setCount] = useState(0);

  function incrementer() {
    setCount(count + 1);
  }

  return (
    <>
      {/* Step 2: Wrap Provider */}
      <Parents.Provider value={count}>
        <h1>Home counter: {count}</h1>
        <button onClick={incrementer}>Clicker</button>

        {/* Step 3: Render Grandchild */}
        <Grandchild />
      </Parents.Provider>
    </>
  );
}

export default App;
