import React, { useState } from 'react';
import './App.css';
import Ajax from './Components/Ajax';
import Clock from './Components/Clock';
import Form from './Components/Form';
import HelloWorld from './Components/HelloWorld';
import Notification from './Components/Notification';
import NumberForm from './Components/NumberForm';
import StarWars from './Components/StarWars';
import Sun from './Components/Sun';

function App() {

  const [showClock, setShowClock] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('Notification')

  return (
    <div className="App">
      <HelloWorld />
      <button className='toggleBtn' onClick={() => setShowClock(!showClock)}> Toggla klockan </button>
            { showClock ? <Clock /> : null}

      <Notification message={message} />
      <Ajax/>
      <StarWars />{/*  5, work on this not fully done */}
      < Sun /> {/*  6a, modify w useEffect? */}
      
      <br/>

      <Form />

      <br/>

      < NumberForm lowest={8} highest={30} />

    </div>
  );
}

export default App;
