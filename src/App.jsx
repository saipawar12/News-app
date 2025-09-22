import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import Newsapp from './components/Newsapp'
import Login from './components/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
     {isLoggedIn ? <Newsapp /> : <Login onLogin={handleLogin} />}
    </>
  )
}

export default App
