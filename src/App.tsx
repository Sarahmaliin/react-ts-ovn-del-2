import React, { useState } from 'react';
import './App.css';
import Clock from './Components/Clock';
import HelloWorld from './Components/HelloWorld';
import Notification from './Components/Notification';

function App() {

  const [showClock, setShowClock] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('Notification')

  return (
    <div className="App">
      <HelloWorld />
      <button onClick={() => setShowClock(!showClock)}> Toggla klockan </button>
            { showClock ? <Clock /> : null}

      <Notification message={message} />
    </div>
  );
}

export default App;
