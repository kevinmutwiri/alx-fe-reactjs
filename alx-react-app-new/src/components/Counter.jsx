import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)} style={{margin: '5px'}}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;