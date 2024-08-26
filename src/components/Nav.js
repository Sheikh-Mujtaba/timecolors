
import './Nav.css';

function Nav({bgColor ,txtColor}) {
  return (
    <div className="nav-section" style={{backgroundColor: bgColor , color :txtColor}}>
        
        <div className='nav-wrapper'>
            <div className='logo'>
                <h2>Prism</h2>
            </div>
            <div className='nav-links'>
            <h2>Playground</h2>
            </div>
        </div>
    </div>
  );
}

export default Nav;
