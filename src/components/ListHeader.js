import React from "react";


import Img_mineral from "../images/minerals.jpg";
import Img_gas from "../images/Gas.jpg";

function List(props) {


    return (
        <div className='UnitContainer'>
            <div className='TextHeader'>
                <h3>UNIT</h3>
            </div>

            <div className='TextHeader'>
                <h3>SUPPLY</h3>
            </div>

            <div className='TextHeader'>
                {/* <h3>MINERALS</h3> */}
                <img className='image1' alt='minerals' src={Img_mineral} />
            </div>

            <div className='TextHeader'>
                {/* <h3>GAS</h3> */}
                <img className='image1' alt='gas' src={Img_gas} />
            </div>

            <div className='TextHeader'>
                <h3>HEALTH</h3>
            </div>

            <div className='TextHeader'>
                <h3>SHIELD</h3>
            </div>

            <div className='TextHeader'>
                <h3>GROUND ATTACK</h3>
            </div>

            <div className='TextHeader'>
                <h3>AIR ATTACK</h3>
            </div>

            <div className='TextHeader'>
                <h3>BONUS</h3>
            </div>

        </div>
    );
}

export default List; 