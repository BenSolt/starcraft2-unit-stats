import React, {useState} from "react";
import { NavLink } from "react-router-dom";
// import {useDarkMode} from '../hooks/useDarkMode';

import ListHeader from './ListHeader';


function Navbar(props) {

    // const [darkMode, setDarkMode] = useDarkMode(false);
    // const toggleMode = e => {
    //   e.preventDefault();
    //   setDarkMode(!darkMode);
    // }

    // const hidebar = a => { 
    //     var x = document.getElementById("header");
    //     return(x.style.display = 'none');
    //   }

    const hideShield = a => { 
        var x = document.getElementById("a");
        return(x.style.display = 'none');

      }

    const showShield = a => { 
      var x = document.getElementById("a");
      return(x.style.display = 'block');
    }

    const hideHeader = a => { 
        var x = document.getElementById("header");
        return(x.style.display = 'none');

      }

    return(
        
    <div className='Navbarholder'>



            
            <nav className='Navlinkholder'>
              

                <NavLink className='navlink' to='/'>HOME</NavLink>
                <NavLink className='navlink' onClick={hideShield} to='/terran'>TERRAN</NavLink>
                <NavLink className='navlink' onClick={showShield} to='/protoss'>PROTOSS</NavLink>
                <NavLink className='navlink' onClick={hideShield} to='/zerg'>ZERG</NavLink> 
                
            </nav> 
            
            {/* window.location.protoss.match(/protoss/) === ''? ''
            ?(): ()
             */}

             {/* {window.location.protoss.match(/protoss/) === '/protoss' ? console.log('SHOW'):  console.log('HIDE')} */}

            <ListHeader/>
     

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