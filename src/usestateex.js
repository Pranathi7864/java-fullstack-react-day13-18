import React,{useState} from 'react';
export function CounterClock()
{
    const[count,setCount]=useState(100);
    function Plus()
    {
        setCount(count+1);
        
    }
    function Minus()
    {
        setCount(count-1);
     
    }
    function Reset()
    {
        setCount(100);
       
    }
    return(
        <div style={{ textAlign:"center"}}>
            <h1 id="num">{count}</h1>
            <button onClick={Plus}>Plus</button>
            <button onClick={Minus}>Minus</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}