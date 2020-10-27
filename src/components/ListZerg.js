import React from "react";

function ListZerg(props) {


    return (
            <div>
                {props.filteredData1.map(a => {
                    return (
                        <div  className='Container'>

                            <div className='UnitPortrait'>
                                <h4 className='name'>{a.name}</h4>
                                <img className='image2' alt='unit' src={a.image}></img>
                            </div>

                                <h4>{a.supply}</h4>
                  
                                <h4>{a.minerals}</h4>
                          
                                <h4>{a.gas}</h4>

                                <h4>{a.health}</h4>
                           
                                <h4>{a.groundAttack}</h4>
                           
                                <h4>{a.airAttack}</h4>
                         
                                <h4>{a.bonus}</h4>
                        </div>
                    )
                })}
            </div>
    );
}

export default ListZerg; 