import React, { useContext } from 'react';
import { Parents } from '../App';  // Import the context

const Grandchild = () => {
  // Step 4: Consume context
  const user = useContext(Parents);

  return (
    <div>
      <h2>Grandparent counter: {user}</h2>
    </div>
  );
};

export default Grandchild;
