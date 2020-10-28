import React, {useState} from "react";

import Img_mineral from "../images/minerals.jpg";
import Img_gas from "../images/Gas.jpg";

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
        const [editing, setEditing] = useState(false); 


        const editRecipe = unit => {    
            setEditing(true);
            setUnit(unit);
        };

    

    return (
        
            <div>
{/* /////////////////////////// HIDDEN CONTAINER  //////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
                {editing && (
                        <div className="ContainerHidden">
                            <div className='UnitPortrait'>
                            <h4>{unit.name} </h4>
                            <img className='image2' alt='unit' src={unit.image}/>
                            </div>

                            <h4 className='textspacing'>{unit.type}</h4>
                            <h4 className='textspacing'>{unit.counter}</h4>
                            <div className='Btnholder'>
                            <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
                            </div>                      
                          
                        </div>
                )}


{/* /////////////////////////// PROTOSSS INFORMATION ///////////////////////////////////// */}
                {props.filteredData1.map(a => (
                    <div key={a.id} className='Container'>
       
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
                ))}

            </div>
    );
}

export default ListProtoss; 