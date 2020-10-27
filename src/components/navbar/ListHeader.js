import React from "react";

import Img_mineral from "../../images/minerals.jpg";
import Img_gas from "../../images/Gas.jpg";
import { NavLink } from "react-router-dom";


function List(props) {

    return (
        <div id='header' className='Container'>
            {/* <button onClick={hideShield}>Hide</button> */}
                <h4 className='text'>UNIT</h4>
          
                <h4 className='text'>SUPPLY</h4>

                <img className='image1' alt='minerals' src={Img_mineral} />
                
                <img className='image1' alt='gas' src={Img_gas} />  
        
                <h4 className='text'>HEALTH</h4>
        
                <h4 id='a' className='text'>SHIELD</h4>
   
                <h4 className='text'>GROUND ATTACK</h4>
   
                <h4 className='text'>AIR ATTACK</h4>

                <h4 className='text'>BONUS</h4>
        
        </div>
    );
}

export default List; 