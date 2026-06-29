import React, { useState } from 'react';

export const Textboxstate = () => {
      const [text, setText] = useState("");
    return (
        <div>
                <input type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            <h1>{text}</h1>
        </div>
    );
};


//another way: By passing the event into the function
export const Textboxstate2=()=>
{
    const handleChange=(e)=>
    {
        console.log(e.target.value)

    }
    return(
        <div>
            <input
            type="text"
            onChange={handleChange}></input>
        </div>
    );
}