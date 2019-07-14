import React from 'react';

function App() {
function randomHexGenerator() {
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7','8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let randomHex = ['#'];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length)
     randomHex.push(hex[randomNumber])
  }
  console.log(randomHex.join(''))
  let hexString = randomHex.join('');
   document.body.style.backgroundColor = hexString
   document.querySelector('.hex-text').innerText = hexString;
   
   
}


  return (
    <div className="App">
      <button onClick={randomHexGenerator}>Click Here</button>
      <div className="hex-text">placeholder</div>     
    </div>
  );
}

export default App;
