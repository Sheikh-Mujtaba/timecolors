import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('#fffff');
  const [txtColor, setTxtColor] = useState('#00000');
  const [secondaryColor, setSecondaryColor] = useState('#C2C2C2');

  return (
    <div className="App">
       <Nav bgColor={bgColor} txtColor={txtColor} secondaryColor={secondaryColor} />
      <Home bgColor={bgColor} setBgColor={setBgColor} txtColor={txtColor} setTxtColor={setTxtColor} secondaryColor={secondaryColor} setSecondaryColor={setSecondaryColor} />
      
    </div>
  );
}

export default App;
