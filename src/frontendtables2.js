import React,{useState} from 'react'

export const FrontendSpringboot = () => {
  const[msg,setMsg]=useState("");
   const[number,setNumber]=useState(0)
  function handleClick(){
      fetch(`http://localhost:8080/hello/${number}`)
      .then((res)=>res.text())
      .then((data)=>setMsg(data));
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>This is REACT frontend page</h1>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={handleClick}>Generate table</button>
      <pre>Tables:{msg}</pre>
    </div>
  )
}