import React from "react";
import '../styles/CSSModule.css'

const CSSModule = () => {
  return (
    <React.Fragment>
      <button 
      style={btnStyle}
      >
        Click Me
      </button>
      <button class="btn">Style</button>
    </React.Fragment>
  );
};

const btnStyle = {
    fontSize: "34px",
    backgroundColor: "red",
  }

export default CSSModule;
