import React from 'react';

const Children = ({ sendDataToParent }) => {
  const sendData = () => {
    sendDataToParent('Hello Parent! This is from Child.');
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default Children;
