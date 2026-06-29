import React,{useState} from "react";
import { BrowserRouter } from "react-router-dom";
import { Link,Route,Router,Routes,useNavigate } from "react-router-dom";
import {Taskpage} from "./Taskpage"
export const Frontendtest=()=>
{
    const [name,setname]=useState("");
    const [pass,setpass]=useState("");
    const navigate=useNavigate();
    function handleClick(){
        const myname="mybatch";
        const mypass="happy@143";
        
        if(name===myname && mypass===pass)
        {
            alert("Login Successful");
           navigate("/task");
        }
        else{
            alert("Invalid credentials");
        }
    }

    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <input type="text" placeholder="Enter username" value={name} onChange={(e)=>setname(e.target.value)}/>
            <input type="password" placeholder="Enter password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
            <button onClick={handleClick}>LOGIN</button>

            
        </div>
    );

}