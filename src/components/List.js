import React from "react";


import Img_mineral from "../images/minerals.jpg";
import Img_gas from "../images/Gas.jpg";  

function List(props) {


    return (
        // <div className='t'>
        <div>
            <div className='UnitContainer'>
                <div className='h3gray1'>
                    <h3>UNIT</h3>
                </div>
            
                <div className='h3gray1'>
                    <h3>SUPPLY</h3>
                </div>

                <div className='h3gray1'>
                    {/* <h3>MINERALS</h3> */}
                    <img className='image1' alt='minerals' src={Img_mineral}/>
                </div>

                <div className='h3gray1'>
                    {/* <h3>GAS</h3> */}
                    <img className='image1' alt='gas' src={Img_gas}/>
                </div>

                <div className='h3gray1'>
                    <h3>HEALTH</h3>
                </div>

                <div className='h3gray1'>
                    <h3>SHIELD</h3>
                </div>

                <div className='h3gray1'>
                    <h3>GROUND ATTACK</h3>
                </div>

                <div className='h3gray1'>
                    <h3>AIR ATTACK</h3>
                </div>

                <div className='h3gray1'>
                    <h3>BONUS</h3>
                </div>
                
            </div>

            

            <div>

                {props.filteredData1.map(a => {
                    return (
                        <div  className='UnitContainer'>
                            <div className='name'>
                                <h3 className='name'>{a.name}</h3>
                                <img className='image2' alt='unit' src={a.image}></img>
                            </div>

                            <div className='h3gray2'>
                                <h3>{a.supply}</h3>
                            </div>   
                          
                            <div className='h3gray2'>
                                <h3>{a.minerals}</h3>
                            </div> 
                            
                            <div className='h3gray2'>
                                <h3>{a.gas}</h3>
                            </div>

                            <div className='h3gray2'>
                                <h3>{a.health}</h3>
                            </div>

                            <div className='h3gray2'>
                                <h3>{a.shield}</h3>
                            </div>

                            <div className='h3gray2'>
                                <h3>{a.groundAttack}</h3>
                            </div>

                            <div className='h3gray2'>
                                <h3>{a.airAttack}</h3>
                            </div> 

                            <div className='h3gray2'>
                                <h3>{a.bonus}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default List; 