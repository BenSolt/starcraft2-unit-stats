import React, {useState} from "react";

function ListProtoss(props) {

    function myFunction() {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
      
        if (checkBox.checked== true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
      }
      
      const [editing, setEditing] = useState(false); 

      const editRecipe = e => {
        setEditing(true);
      };

  

    return (
            <div>
    
                {props.filteredData1.map((a) => (
                    <div>
                        <div  className='UnitContainer' key={a.name}>
                            
                            <div>
                                <h3 className='name'>{a.name}</h3>
                                <img className='image2' alt='unit' src={a.image}></img>
                                <form >
                                <h3 className='name'>Bonus Against:</h3>
                                {/* <input id='myCheck' className='Checkbox1' type="checkbox" onClick={myFunction}/>  */}
                                </form>   
                                {/* <button onClick={toggleButton}>Click Me</button> */}
                                <button className="BtnEditRecipe" onClick={() => editRecipe(a)}>Bonus</button>   
                                <button className="BtnEditCancel" onClick={() => setEditing(false)}>Cancel</button>

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
                        
                        {editing && (
                            <div className='counterUnit'> Checkbox is check</div>
                            )}


                    </div>
                    )
                )}
            </div>
    );
}

export default ListProtoss; 