import React from "react";

import Img_mineral from "../../images/minerals.jpg";
import Img_gas from "../../images/Gas.jpg";
import { NavLink } from "react-router-dom";


function List(props) {

    return (
        <div id='header' className='Container'>
            {/* <button onClick={hideShield}>Hide</button> */}
                <h4 className='textUnit'>UNIT</h4>
          
                <h4 className='text'>SUPPLY</h4>

                <img className='imageRes' alt='minerals' src={Img_mineral} />
                {/* <h4 className='text2'>MINERAL</h4> */}

                {/* <h4 className='text'>GAS</h4> */}

                <img className='imageRes' alt='gas' src={Img_gas} /> 
               
                <h4 className='text2'>HEALTH</h4>
        
                <h4 id='a' className='TextShield'>SHIELD</h4>
   
                <h4 className='text'>GROUND ATTACK</h4>
   
                <h4 className='text2'>AIR ATTACK</h4>

                <h4 className='text'>BONUS</h4>
        </div>
    );
}

export default List; 