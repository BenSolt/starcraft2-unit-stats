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


        const [recipeToEdit, setRecipeToEdit] = useState(props.filteredData1);
        const [editing, setEditing] = useState(false); 


        const editRecipe = e => {    
            setEditing(true);
            // setRecipeToEdit(e);
        };

  

    return (
            <div>
                {props.filteredData1.map(a => (
                    <div key={a.id} >
                        <div  className='UnitContainer'>
                            
                            <div>
                                <h3 className='name'>{a.name}</h3>
                                <img className='image2' alt='unit' src={a.image}></img>
                                <button onClick={() => editRecipe(a)}>Click Me1</button>
                                <button className="BtnEditCancel" onClick={() => setEditing(false)}>Cancel</button>

                                {/* <button onClick={toggleInfo}>Click Me2</button> 

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
                            <div>
                                <div className='counterUnit'> Checkbox is check</div>
                                <h3 className='name'>{a.name}</h3>
                            </div>
                            )}


                    </div>
                    )
                )}

            </div>
    );
}

export default ListProtoss; 