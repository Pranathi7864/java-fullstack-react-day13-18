import React,{useState,useEffect} from "react";
export const Dependencyarray=()=>
{
    const [count,setCount]=useState(0);
    useEffect(()=>
    {
        console.log("count changed to:",count);
        alert("Count is now "+count);
    },[count]);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
}