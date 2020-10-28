import React, {useState} from "react";

import Img_mineral from "../images/minerals.jpg";
import Img_gas from "../images/Gas.jpg";
import {Accordion, Card, Button} from 'react-bootstrap'

function ListProtoss(props) {

    function myFunction() {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
      
        if (checkBox.checked === true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
      }

      function toggleInfo() {
        
        var x = document.getElementById("myDIV");
       
        if (x.style.display === 'block'){
            x.style.display = 'none';
        } else {
            x.style.display = "block";
        }
      }


        const [unit, setUnit] = useState(props.filteredData1);
      

    return (
        
            <div>
                {props.filteredData1.map(a => (
                    <div key={a.id} className='ContainerA'>

                        <div className='ContainerB'>
       
                            <div className='UnitPortrait'>
                                <h4 className='name'>{a.name}</h4>
                                <img className='imageUnit' alt='unit' src={a.image}></img>
                                    
                                {/* <button className="Btn" onClick={() => editRecipe(a)}>Show</button>
                                <button className="Btn" onClick={() => setEditing(false)}>Hide</button>  */}
                            </div>
                    
                            <h4 className='UnitText'>{a.supply}</h4>
                            
                            <h4 className='UnitText2'>{a.minerals}</h4>
                            
                            <h4 className='UnitText'>{a.gas}</h4>
                            
                            <h4 className='UnitText2'>{a.health}</h4>
                            
                            <h4 className='UnitShield'>{a.shield}</h4>
                            
                            <h4 className='UnitText2'>{a.groundAttack}</h4>
                            
                            <h4 className='UnitText'>{a.airAttack}</h4>
                            
                            <h4 className='UnitText2'>{a.bonus}</h4>
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

export default ListProtoss; 