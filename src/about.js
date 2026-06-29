import React from "react"; 

export function About() {
  var n = 0; 

  function Plus() {
    n += 1; 
    document.getElementById("num").textContent = n;
  }

  function Minus() {
    n -= 1; 
    document.getElementById("num").textContent = n;
  }
 function Reset() {
    n =0; 
    document.getElementById("num").textContent = n;
  }
  const circleStyle = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "24px",
    color: "white",
    border: "none",
    cursor: "pointer",
    margin: "5px"
  };
//call back function onclick={callbackfunction}
  return( 
    <div> 
        <h1>About Page- This is a calculator page</h1>
      <h2 id="num">{n}</h2> 
      <button onClick={Plus} style={{ ...circleStyle, backgroundColor: "green" }}>+</button> 
      <button onClick={Minus} style={{ ...circleStyle, backgroundColor: "red" }}>-</button> 
        <button onClick={Reset} style={{ ...circleStyle, backgroundColor: "grey" }}>0</button> 

    </div> 
  ); 
}
