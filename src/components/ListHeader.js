import React from "react";

import Img_mineral from "../images/minerals.jpg";
import Img_gas from "../images/Gas.jpg";
import { NavLink } from "react-router-dom";



function List(props) {



    const hideShield = a => { 
        var x = document.getElementById("a");
        if (x.style.display === 'block'){
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
      }


    return (
        <div className='UnitContainer'>
            {/* <button onClick={hideShield}>Hide</button> */}
            <div className='TextHeader'>
                <h3>UNIT</h3>
            </div>

            <div className='TextHeader'>
                <h3>SUPPLY</h3>
            </div>

            <div className='TextHeader'>
                <img className='image1' alt='minerals' src={Img_mineral} />
            </div>

            <div className='TextHeader'>
                <img className='image1' alt='gas' src={Img_gas} />
            </div>

            <div className='TextHeader'>
                <h3>HEALTH</h3>
            </div>

{/* HIDE for Terran/ZERG ???????? */}
            <div id='a' className='TextHeaderShield'>
                <h3>SHIELD</h3>
            </div>
{/* //////////////////////////////// */}

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