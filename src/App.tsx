import React, { useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Ajax from './Components/Ajax';
import Clock from './Components/Clock';
import Form from './Components/Form';
import HelloWorld from './Components/HelloWorld';
import InputValidation from './Components/InputValidation';
import Notification from './Components/Notification';
import NumberForm from './Components/NumberForm';
import StarWars from './Components/StarWars';
import Sun from './Components/Sun';

function App() {

  const [showClock, setShowClock] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('Notification')
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="App">
      <header>
        <button onClick={() => setShowMenu(!showMenu)}>menu</button>
          {showMenu ? <nav className={'menu ' + showMenu}>
            <Link to='/'>Start</Link>
            <Link to='/Hello World'>Hello world</Link>
            <Link to='/Clock'>Klockan</Link>
            <Link to='/Notification'>Notification</Link>
            <Link to='/Ajax'>Ajax</Link>
            <Link to='/StarWars'>StarWars</Link>
            <Link to='/Sun'>Get sundetails</Link>
            <Link to='/Form'>Form</Link>
            <Link to='/Numberform'>Number form</Link>
            <Link to='/InputValidation'>Iput Validation</Link>
          </nav> : null}
      </header>
      <main>
        <Switch>
        <Route exact path='/'>
          <h1>React Exercises</h1>
        </Route>
        <Route exact path='/HelloWorld'>
          <HelloWorld />
        </Route>
        <Route exact path='/Clock'>
          <button className='toggleBtn' onClick={() => setShowClock(!showClock)}> Toggla klockan </button>
              { showClock ? <Clock /> : null}
        </Route>
        <Route  exact path='/Notification'>
          <Notification message={message} />
        </Route>
        <Route exact path='/Ajax'>
          <Ajax/>
        </Route>
        <Route exact path='/StarWars'>
          <StarWars />{/*  5, work on this not fully done */}
        </Route>
        <Route exact path='/Sun'>
          < Sun /> {/*  6a, modify w useEffect? */}
        </Route>
        <Route exact path='/Form'>
          <Form />
        </Route>
        <Route exact path='/NumberForm'>
          < NumberForm lowest={8} highest={30} />
        </Route>
        <Route exact path='/InputValidation'>
          < InputValidation />
        </Route>
        </Switch>
      </main>
      

    </div>
  );
}

export default App;
