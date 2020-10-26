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
        
            <div>
                {editing && (
                        <div className="CounterFormHolder">
                            
                            <h3>{unit.name} </h3>
                            <img className='image2' alt='unit' src={unit.image}/>
                           
                            <h4 className='textspacing'>{unit.type}</h4>
                            <h4 className='textspacing'>{unit.counter}</h4>
                            <div className='Btnholder'>
                            <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
                            </div>
                            
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
                                <h4 className='name'>{a.name}</h4>
                                <img className='image2' alt='unit' src={a.image}></img>
                                
                                <button className="Btn" onClick={() => editRecipe(a)}>Show</button>
                                <button className="Btn" onClick={() => setEditing(false)}>Hide</button>

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

                            <div className='h4shield'>
                                <h4>{a.shield}</h4>
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

                    </div>
                ))}
            </div>
    );
}

export default ListProtoss; 