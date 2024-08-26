import React, { useState } from 'react';
import './Home.css';

function Home({bgColor ,setBgColor ,txtColor ,setTxtColor}) {
//   const [bgColor, setBgColor] = useState('#ffffff'); // Default background color
  // Default text color
  const [primaryColor, setPrimaryColor] = useState('#ff0000'); // Default primary color

  const handleBgColor = (e) => {
    setBgColor(e.target.value);
  };

  const handleTxtColor = (e) => {
    setTxtColor(e.target.value);
  };

  const handlePrimaryColor = (e) => {
    setPrimaryColor(e.target.value);
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
        </div>

        <div className='boxes'>
          <div className='box-2' style={{ backgroundColor: primaryColor }}></div>
          <div className='box' style={{ backgroundColor: primaryColor }}></div>
         
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
      </div>
    </div>
  );
}

export default Home;
