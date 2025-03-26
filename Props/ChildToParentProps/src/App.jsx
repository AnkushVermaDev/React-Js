import React, { useState } from 'react';
import Children from './Children'

const App = () => {
  const [childData, setChildData] = useState('');

  // Function to receive data from child
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {childData}</p>

      {/* Passing function as props to Child */}
      <Children sendDataToParent={handleChildData} />
    </div>
  );
};

export default App;
