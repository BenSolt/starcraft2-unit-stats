import React, { useState } from "react";
// import axios from "axios";
// import axiosWithAuth from '../utils/AxiosWithAuth';

// import AddRecipeForm from './AddRecipeForm';
// import SearchRecipeForm from './SearchRecipeForm';

const initialRecipe = {
  name: ""
};

const Test = (props) => {  
   
  const recipes = [
    {
        id: 1,
        name: "apple"},
    {
        id: 2,
        name: "bana"},
    {
        id: 3,
        name: "cherr"
    },
  ]

  const [editing, setEditing] = useState(false); 
  const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);


  const editRecipe = recip => {
    setEditing(true);
    setRecipeToEdit(recip);
  };

  const saveEdit = e => {
    recipes.map(recip => {
        if (recip.id === recipes.id) {
            return recipes
        }else {
            return recip;
        }
    })
  }

  return (
    <div>

    {editing && (
        <form className="EditFormHolder" onSubmit={saveEdit}>
          <div className="EditForm">
            <h2>Edit Recipe</h2>
            <h2>
            {recipeToEdit.name} 
            </h2>

            <button className="BtnEditSave" type="submit">save</button>
            <button className="BtnEditCancel" onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

    <div className='RecipeHolder'>


        {recipes.map(recip => ( 
            <div className="RecipeCard" key={recip.id} >
                <h2>{recip.name}</h2>
                <div className="BtnHolder">

                <button className="BtnEditRecipe" onClick={() => editRecipe(recip)}>Edit Recipe</button>
                </div>

            </div>
        ))}

    </div>

      
    </div>
  );
};

export default Test;
