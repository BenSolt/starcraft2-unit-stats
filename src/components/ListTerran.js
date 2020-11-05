import React from "react";
import {Accordion, Card, Button} from 'react-bootstrap'

function ListTerran(props) {


    return (
            <div>
                {props.filteredData1.map(a => (
                        <div key={a.id} className='ContainerA'>
                            

                            <div className='ContainerB'>
                                
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

                            <div className='ContainerB'>
                            <Accordion >
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={a.id}>
                                        Counters
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={a.id}>
                                        <Card.Body>

                                        <h4 className='textAccord'>Type:{a.type}</h4>
                                        <h4 className='textAccord'>Strong:{a.strong}</h4>
                                        <h4 className='textAccord'>Weak:{a.weak}</h4>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>

                    </div>
                ))}

            </div>
    );
}

export default ListTerran; 