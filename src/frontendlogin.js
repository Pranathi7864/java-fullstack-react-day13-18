import React,{useState} from "react";
export const Frontendlogin=()=>
{
    const [name,setname]=useState("")
    const [pass,setpass]=useState("")
    const handleClick=()=>
    {
        fetch("http://localhost:8080/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({username: name, password:pass}),
        })
        .then((res)=>(res.text()))
        .then((data)=>alert(data))
        .catch(()=>alert("Backend stopped responding"))

    }
    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter name"/>
            <input type="text" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="Enter password"/>
            <button onClick={handleClick}>LOGIN</button>

        </div>
    );
}
