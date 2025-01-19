import logo from './logo.svg';
import './App.css';
// import Taskbar from './Taskbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import Tutorial from './screens/Tutorial.js';
import Mode from './screens/Mode.js';
import Start from './screens/Start.js';
import LearnMode from './screens/LearnMode.js';
import GameMode from './screens/GameMode.js';
import Stats from './screens/Stats.js';
import GameOver from './screens/GameOver.js';
import { Provider } from './components/ui/provider.jsx';

import React, { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([{}]);

  // useEffect(() => {
  //   fetch('/').then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    

    // <>
    // <div>
    //   {(typeof data.members === 'undefined') ? (
    //     <p>Loading...</p>
    //   ): (
    //     data.members.map((member, i) => (
    //       <p key={i}>{member}</p>
    //     ))
    //   )}
    // </div>

    <Provider>
    {/* <Component {...pageProps} /> */}
    <Router>
      {/* <Taskbar /> */}
      <Routes>
        <Route path="/" element={
          <>
            <Signup />
          </>
        }/>
        <Route path="/login" element={
          <>
            <Login />
          {/* <div className='snipeitTableDiv'>
            <VerticalLayout style={{ justifyContent: 'center' }}>
              <Toggle/>
              <SnipeitTablePage />
            </VerticalLayout>
          </div> */}
          </>
        }/>
        <Route path="/tutorial" element={
          <>
            <Tutorial />
          </>
        }/>
        <Route path="/mode" element={
          <>
            <Mode />
          </>
        }/>
        <Route path="/start" element={
          <>
            <Start />
          </>
        }/>
        <Route path="/learnmode" element={
          <>
            <LearnMode />
          </>
        }/>
        <Route path="/gamemode" element={
          <>
            <GameMode />
          </>
        }/>
        <Route path="/stats" element={
          <>
            <Stats />
          </>
        }/>
        <Route path="/gameover" element={
          <>
            <GameOver />
          </>
        }/>
      </Routes>
    </Router>
  </Provider>
    
   
   
    // </>
  );
}

export default App;
