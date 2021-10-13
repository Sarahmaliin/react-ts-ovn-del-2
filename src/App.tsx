import React, { useState } from 'react';
import './App.css';
import Ajax from './Components/Ajax';
import Clock from './Components/Clock';
import HelloWorld from './Components/HelloWorld';
import Notification from './Components/Notification';
import StarWars from './Components/StarWars';
import Sun from './Components/Sun';

function App() {

  const [showClock, setShowClock] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('Notification')

  return (
    <div className="App">
      <HelloWorld />
      <button onClick={() => setShowClock(!showClock)}> Toggla klockan </button>
            { showClock ? <Clock /> : null}

      <Notification message={message} />
      <Ajax/>
      <StarWars />{/*  5, work on this */}
      < Sun /> {/*  6a, modify w useEffect? */}
    </div>
  );
}

export default App;
