import React,{useState} from "react";
export const Frontendtables=()=>
{
    const [msg,setmsg]=useState("")
    const [number,setnumber]=useState("")
    const handleClick=()=>
    {
        fetch("http://localhost:8080/tables/"+number)
        .then(res=>res.text())
        .then((res)=>(setmsg(res)));
    }
    return(
        <div>
            <h1>Tables</h1>
            <input id="inp" type="number" placeholder="Enter the number" onChange={(e)=>setnumber(e.target.value)}/>
            <button onClick={handleClick}>Click to view 5th table</button>
            <p style={{ whiteSpace: "pre-line" }}>{msg}</p>
        </div>
    );
}