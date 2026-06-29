import React from 'react'
export const Greeting=(props)=>
{
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <p> You are {props.age} years old.</p>
        </div>
    );
}

export const Propsintro=()=>
{
    return(
        <div>
            <Greeting name="Pranathi" age={19}/>
            <Greeting name="Reena" age={20}/>
        </div>

    );
}
