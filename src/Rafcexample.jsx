import React from 'react'

export const Rafcexample = () => {
let n=9
function handleClick()
{
 
  document.getElementById("res").src="/ronaldo.jpg";
}

  return (
    <div>
        
      <img src="/messy.jpg" id="res" onClick={handleClick}/>
      </div>
  )
}
