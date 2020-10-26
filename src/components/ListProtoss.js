import React, {useState} from "react";

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
        const [editing, setEditing] = useState(true); 
        //false


        const editRecipe = unit => {    
            setEditing(true);
            setUnit(unit);
        };

  

    return (
        
            <div >
                {editing && (
                        <div className="CounterFormHolder">
                            
                            <h1>
                            {unit.name} 
                            <img className='image2' alt='unit' src={unit.image}/>
                            </h1>
                            <h3 className='textspacing'>{unit.type}</h3>
                            <h4 className='textspacing'>{unit.counter}</h4>
                            <div className='Btnholder'>
                            <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
                            </div>
                            {/* <div className="CounterForm">
                          
                                <h3 className='textspacing'>{unit.type}</h3>
                                <h4 className='textspacing'>{unit.counter}</h4>
                               
                                <div>
                                    <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
                                </div>
                            </div> */}
                            
                            {/* {props.counterData.map(a => (
                                <div  key={a.id} className="CounterForm">
                                    <h5 className='name'>{a.type}</h5>
                                    <h5 className='name'>{a.counter}</h5>
                                </div>
                            ))} */}
                                {/* <div>
                                    <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
                                </div> */}
                          
                        </div>
                    
                )}

                {props.filteredData1.map(a => (
                    <div key={a.id} >
                        <div  className='UnitContainer'>
                            
                            <div className='ccc'>
                                <h3 className='name'>{a.name}</h3>
                                <img className='image2' alt='unit' src={a.image}></img>
                                <button className="Btn" onClick={() => editRecipe(a)}>Show</button>
                                <button className="Btn" onClick={() => setEditing(false)}>Hide</button>

                                {/* <button onClick={toggleInfo}>Toggle</button> 

                                <div className='info' id="myDIV">
                                This is my DIV element.
                                </div> */}

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

                            <div className='h3shield'>
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

                    </div>
                ))}
            </div>
    );
}

export default ListProtoss; 