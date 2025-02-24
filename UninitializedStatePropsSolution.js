import React, { useState, useEffect } from 'react';

const MyComponent = ({ myProp }) => {
  const [myState, setMyState] = useState(null);

  useEffect(() => {
    // Simulate an asynchronous operation to fetch data
    setTimeout(() => {
      setMyState({ value: 'Hello!' });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      {/* Safe access to state and props */}
      <p>Prop: {myProp?.value || 'Prop not defined'}</p>
      <p>State: {myState?.value || 'State not defined'}</p>
    </div>
  );
};

export default MyComponent;