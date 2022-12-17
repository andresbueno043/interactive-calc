import React from "react";
import './index.css'

function ClearButton(props){
  return (
    <div className="clear-button"
      onClick={props.handleClick}
    >
      {props.children}
    </div>
  );
}

export {ClearButton}