import React, { useState } from 'react';
import './App.css';
import Clock from './Components/Clock';
import HelloWorld from './Components/HelloWorld';

function App() {

  const [showClock, setShowClock] = useState<boolean>(true)
	const clockVisibleClass = showClock ? '' : 'hidden'


  return (
    <div className="App">
      <HelloWorld />
      <button onClick={() => setShowClock(!showClock)}> Toggla klockan </button>
            { showClock ? <Clock /> : null}
    </div>
  );
}

export default App;
