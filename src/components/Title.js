import React from "react";
import "../styles.css";

function Title ({children}) {
  return(
    <div className="title-container">
      <h1>{children}</h1>
    </div>
  )
}

export default Title;