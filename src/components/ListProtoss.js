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

        const [recipeToEdit, setRecipeToEdit] = useState(props.filteredData1);
        const [editing, setEditing] = useState(false); 


        const editRecipe = e => {
        setEditing(true);
        setRecipeToEdit(e);
        };

  

    return (
            <div>

                {/* {props.filteredData1.map(recip => ( 
                            <div className="RecipeCard" key={recip.id} >
                                <h2>{recip.name}</h2>
                                <div className="BtnHolder">
                                <button className="BtnEditRecipe" onClick={() => editRecipe(recip)}>Edit Recipe</button>
                                </div>

                            </div>
                        ))} */}
    
                {props.filteredData1.map(a => (
                    <div key={a.id} >
                        <div  className='UnitContainer'>
                            
                            <div>
                                <h3 className='name'>{a.name}</h3>
                                <img className='image2' alt='unit' src={a.image}></img>
                                <button onClick={() => editRecipe()}>Click Me</button>
                                <button className="BtnEditCancel" onClick={() => setEditing(false)}>Cancel</button>

                                {/* <form >
                                <h3 className='name'>Bonus Against:</h3>
                                <input id='myCheck' className='Checkbox1' type="checkbox" onClick={myFunction}/> 
                                </form>    */}
                               

                                {/* <div id="text">
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