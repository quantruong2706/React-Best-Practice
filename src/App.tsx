import React, { useState } from 'react';
import MyComponent from '@components/MyComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>hello world</h1>
      <h1>Vite + React</h1>
      <MyComponent />
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
