import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count <= 0) {
      alert("HELLO");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;

