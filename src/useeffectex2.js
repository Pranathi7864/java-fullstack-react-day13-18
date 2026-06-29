import React,{useState,useEffect} from "react";
export function Usehook2()
{
    const[message,setMessage]=useState("Loading.....");
     const[img,setImage]=useState("messy.jpg");
    useEffect(()=>
    {
        const timer=setTimeout(()=>{
            setMessage("Hello, this is a useEffect in action!!!")
            setImage("ronaldo.jpg")
        },5000);
        return ()=>clearTimeout(timer);
    },[]);
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>{message}</h1>
            <img src={img}/>
        </div>
        
    )
    ;

}