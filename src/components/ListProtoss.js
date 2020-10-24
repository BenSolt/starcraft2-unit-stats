import React from "react";

function ListProtoss(props) {


    return (
            <div>
                <h1>PROTOSS</h1>
                {props.filteredData1.map(a => {
                    return (
                        <div  className='UnitContainer'>
                            <div>
                                <h3 className='name'>{a.name}</h3>
                                <img className='image2' alt='unit' src={a.image}></img>
                                <form >
                                <input  className='Checkbox1' type="checkbox"/>
                                </form>                          
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
    );
}

export default ListProtoss; 