import React from "react";
import { NavLink } from "react-router-dom";
// import {useDarkMode} from '../hooks/useDarkMode';



function Navbar() {

    // const [darkMode, setDarkMode] = useDarkMode(false);
    // const toggleMode = e => {
    //   e.preventDefault();
    //   setDarkMode(!darkMode);
    // }

    return(
        
    <div className='Navbarholder'>
            
            <nav className='Navlinkholder'>
               
                <NavLink className='navlink' to='/'>HOME</NavLink>
                <NavLink className='navlink' to='/terran'>TERRAN</NavLink>
                <NavLink className='navlink' to='/protoss'>PROTOSS</NavLink>
                <NavLink className='navlink' to='/zerg'>ZERG</NavLink>
                
            </nav> 

            {/* <div className="NavbarholderDark">
                <h5 className="navtext">Darkmode</h5>
                <div className="dark-mode__toggle">
                    <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    />
                </div>       
            </div>        */}

    </div>
    )
}

export default Navbar;