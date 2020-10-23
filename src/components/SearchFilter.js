import React from "react";


function SearchFilter(props) {
    function handleChange(e) {
      props.onFilterChange(e.target.value);
    }
  
    return (
      <div className='InputContainer'>
        <input
          className="Input"
          type="text"
          placeholder="Search Unit"
          value={props.filter}
          onChange={handleChange}
        />
      </div>
    );
  }

export default SearchFilter; 