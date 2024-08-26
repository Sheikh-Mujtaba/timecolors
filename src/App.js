import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState([]);
  const [txtColor, setTxtColor] = useState([]);

  return (
    <div className="App">
       <Nav bgColor={bgColor} txtColor={txtColor} />
      <Home bgColor={bgColor} setBgColor={setBgColor} txtColor={txtColor} setTxtColor={setTxtColor} />
      
    </div>
  );
}

export default App;
