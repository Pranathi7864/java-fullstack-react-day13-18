import React,{useState,useEffect} from "react";
export function Usehook()
{
    const[message,setMessage]=useState("Loading.....");
    useEffect(()=>
    {
        const timer=setTimeout(()=>{
            setMessage("Hello, this is a useEffect in action!!!")
        },5000);
        return ()=>clearTimeout(timer);
    });
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>{message}</h1>
        </div>
        
    )
    ;

}