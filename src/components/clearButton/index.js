import React from "react";
import './index.css'

function ClearButton(props){
  return (
    <div className="clear-button" >
      {props.children}
    </div>
  );
}

export {ClearButton}