
import './Nav.css';

function Nav({bgColor ,txtColor,secondaryColor}) {
  return (
    <div className="nav-section" style={{backgroundColor: bgColor , color :txtColor}}>
        
        <div className='nav-wrapper'>
            <div className='logo'>
                <h2>PrismPlayground</h2>
            </div>
            <div className='nav-links'>
            <button className='btn' style={{backgroundColor :secondaryColor , color: txtColor}} >Get Started</button>
            </div>
        </div>
    </div>
  );
}

export default Nav;
