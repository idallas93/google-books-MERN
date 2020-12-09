import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button(props) {
  return (
    <button
    variant="success" onClick={()=>{
        props.handleFormSubmit()
    }} 
    >
      Search
    </button>
  );
}

export default Button;
