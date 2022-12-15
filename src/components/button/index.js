import React from "react";

function Button(props){

  const isOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return(
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} //trimEnd method removes spaces from the end of a string
    > 
      {props.children}
    </div>
  );
}

export { Button }