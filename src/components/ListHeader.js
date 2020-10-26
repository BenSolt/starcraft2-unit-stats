import React from "react";

import Img_mineral from "../images/minerals.jpg";
import Img_gas from "../images/Gas.jpg";
import { NavLink } from "react-router-dom";



function List(props) {




    return (
        <div className='UnitContainer'>
            {/* <button onClick={hideShield}>Hide</button> */}
            <div className='TextHeader'>
                <h4>UNIT</h4>
            </div>

            <div className='TextHeader'>
                <h4>SUPPLY</h4>
            </div>

            <div className='TextHeader'>
                <img className='image1' alt='minerals' src={Img_mineral} />
            </div>

            <div className='TextHeader'>
                <img className='image1' alt='gas' src={Img_gas} />
            </div>

            <div className='TextHeader'>
                <h4>HEALTH</h4>
            </div>


            <div id='a' className='TextHeaderShield'>
                <h4>SHIELD</h4>
            </div>


            <div className='TextHeader'>
                <h4>GROUND ATTACK</h4>
            </div>

            <div className='TextHeader'>
                <h4>AIR ATTACK</h4>
            </div>

            <div className='TextHeader'>
                <h4>BONUS</h4>
            </div>

        </div>
    );
}

export default List; 