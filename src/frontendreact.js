import React, { useState } from "react";
export const Frontendreact=()=>
{
     const [msg,setmsg]=useState("");
    const handlemessage=()=>{
    fetch("http://localhost:8080/hello")
    .then(res=>res.text())
    .then((m)=>setmsg(m));}
   
    return (
        <div>
            <h1>This is frontend</h1>
            <button onClick={handlemessage}>Click to see the backend message</button>
            <p>{msg}</p>
        </div>
    );
}