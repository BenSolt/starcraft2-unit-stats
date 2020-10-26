import React from "react";

function ListZerg(props) {


    return (
            <div>
                {props.filteredData1.map(a => {
                    return (
                        <div  className='UnitContainer'>
                            <div>
                                <h4 className='name'>{a.name}</h4>
                                <img className='image2' alt='unit' src={a.image}></img>
        
                            </div>

                            <div className='h4gray2'>
                                <h4>{a.supply}</h4>
                            </div>   
                          
                            <div className='h4gray2'>
                                <h4>{a.minerals}</h4>
                            </div> 
                            
                            <div className='h4gray2'>
                                <h4>{a.gas}</h4>
                            </div>

                            <div className='h4gray2'>
                                <h4>{a.health}</h4>
                            </div>

                            <div className='h4gray2'>
                                <h4>{a.groundAttack}</h4>
                            </div>

                            <div className='h4gray2'>
                                <h4>{a.airAttack}</h4>
                            </div> 

                            <div className='h4gray2'>
                                <h4>{a.bonus}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
}

export default ListZerg; 