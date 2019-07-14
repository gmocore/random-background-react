import React from 'react';

function App() {
function hello() {
  console.log('hello')
}

  return (
    <div className="App">
      <button onClick={hello}>Click Here</button>      
    </div>
  );
}

export default App;
