import React,{useState} from 'react';
export function CounterClock2()
{
    const[count,setCount]=useState(100);
 
    return(
        <div style={{ textAlign:"center"}}>
            <h1 id="num">{count}</h1>
            <button onClick={()=>setCount(count+1)}>Plus</button>
            <button onClick={()=>setCount(count-1)}>Minus</button>
            <button onClick={()=>setCount(100)}>Reset</button>
        </div>
    );
}