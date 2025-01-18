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
import LoginButton from './components/LoginButton.js';
import LogoutButton from './components/LogoutButton.js';

function App() {
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
    <main className='column'>
      <h1> Auth0 Login</h1>
      <LoginButton/>
      <LogoutButton/>
    </main>
   
    // </>
  );
}

export default App;
