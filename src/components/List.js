import React from "react";

function List(props) {


    const data = props.filteredData1.map(
        (data, i) => <li key={i}> {data} </li>
    );
 
    return (
        <div>

            <div className='UnitContainer'>
                <div className='h3gray1'>
                    <h3>UNIT</h3>
                </div>
            
                <div className='h3gray1'>
                    <h3>SUPPLY</h3>
                </div>

                <div className='h3gray1'>
                    <h3>MINERALS</h3>
                </div>

                <div className='h3gray1'>
                    <h3>GAS</h3>
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

            {/* <div>{data}</div> */}
            <div>

                {props.filteredData2.map(a => {
                    return (
                        <div  className='UnitContainer'>
                            <div className='name'>
                                <h2>{a.name}</h2>
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