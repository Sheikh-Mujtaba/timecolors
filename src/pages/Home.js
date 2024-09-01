import React, { useState } from 'react';
import './Home.css';

function Home({bgColor ,setBgColor ,txtColor ,setTxtColor ,secondaryColor,setSecondaryColor}) {
//   const [bgColor, setBgColor] = useState('#ffffff'); // Default background color
  // Default text color
  const [primaryColor, setPrimaryColor] = useState('#fffff');
   // Default primary color
  //  const [secondaryColor, setSecondaryColor] = useState('#ff0000');
  const handleBgColor = (e) => {
    setBgColor(e.target.value);
  };

  const handleTxtColor = (e) => {
    setTxtColor(e.target.value);
  };

  const handlePrimaryColor = (e) => {
    setPrimaryColor(e.target.value);
  };
  const handleSecondaryColor = (e) => {
    setSecondaryColor(e.target.value);
  };

  return (
    <div className='section' style={{ backgroundColor: bgColor }}>

<h1 className='not-avaiable' style={{color: txtColor}}> NOT AVAILABLE ON SMALLER SCREENS</h1> 

      <div className='wrapper'>
        <div className='heading' style={{ color: txtColor }}>
          <h1>
            Visualize Your
            <br />
            Colors & Fonts
            <br />
            On a Real Site
          </h1>
       
          <button className='btn' style={{backgroundColor :secondaryColor , color: txtColor}} >Get Started</button>
          
        </div>

        <div className='boxes'>
          <div className='box-2' style={{ backgroundColor: primaryColor }}></div>
          <div className='box' style={{ backgroundColor: primaryColor }}></div>
          <div className='box-2' style={{ backgroundColor: primaryColor }}></div>
          
    
         
        </div>
      </div>


      <div className='colors-picker'>
        <label>
          Background Color
          <input type='color' value={bgColor} onChange={handleBgColor} />
        </label>

        <label>
          Text Color
          <input type='color' value={txtColor} onChange={handleTxtColor} />
        </label>

        <label>
          Primary Color
          <input type='color' value={primaryColor} onChange={handlePrimaryColor} />
        </label>
        <label>
          Secondary Color
          <input type='color' value={secondaryColor} onChange={handleSecondaryColor} />
        </label>
      </div>
    </div>
  );
}

export default Home;
