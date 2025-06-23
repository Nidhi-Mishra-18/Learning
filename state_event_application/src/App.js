import React, { useState } from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Assignment 2: React State & Event Handling</h1>
      <Counter />
      <LiveInputDisplay />
      <VisibilityToggle />
    </div>
  );
}

//Counter Component
function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div style={boxStyle}>
      <h2>Counter</h2>
      <p>Current Count: {counterValue}</p>
      <button onClick={() => setCounterValue(counterValue + 1)}> Increment</button>
      <button onClick={() => setCounterValue(counterValue - 1)}> Decrement</button>
    </div>
  );
}

//Live Input Display Component
function LiveInputDisplay() {
  const [inputText, setInputText] = useState("");

  return (
    <div style={boxStyle}>
      <h2>Live Text Display</h2>
      <input
        type="text"
        placeholder="Type here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>Typed Text: {inputText}</p>
    </div>
  );
}

//Visibility Toggle Component
function VisibilityToggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={boxStyle}>
      <h2>Visibility Toggle</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>
      {isVisible && <p>Hello World.<br></br> Click the button to hide it.</p>}
    </div>
  );
}

//Simple inline section styling
const boxStyle = {
  border: '1px solid black',
  padding: '15px',
  margin: '20px auto',
  maxWidth: '400px',
  borderRadius: '8px'
};

export default App;
