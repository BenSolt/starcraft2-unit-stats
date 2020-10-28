import React from "react";

function ListZerg(props) {


    return (
            <div>
                {props.filteredData1.map(a => {
                    return (
                        <div className='ContainerA'>

<                           div className='ContainerB'> 

                                <div className='UnitPortrait'>
                                    <h4 className='name'>{a.name}</h4>
                                    <img className='imageUnit' alt='unit' src={a.image}></img>
                                </div>

                                <h4 className='UnitText'>{a.supply}</h4>
                    
                                <h4 className='UnitText2'>{a.minerals}</h4>
                            
                                <h4 className='UnitText'>{a.gas}</h4>

                                <h4 className='UnitText2'>{a.health}</h4>
                            
                                <h4 className='UnitText'>{a.groundAttack}</h4>
                            
                                <h4 className='UnitText2'>{a.airAttack}</h4>
                            
                                <h4 className='UnitText'>{a.bonus}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
}

export default ListZerg; 