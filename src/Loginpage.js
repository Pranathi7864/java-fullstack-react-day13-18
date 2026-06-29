import React from "react";
export const Loginpage=()=>
{
    const handleClick=()=>
    {
        const name="pran";
        const pass="student";
        const uname=document.getElementById("uname").value;
        const upass=document.getElementById("upass").value;
        if(uname===name && upass===pass)
        {
            alert("Login successful");
        }
        else if(uname===name && upass!==pass)
        {
            alert("Incorrect password");
        }
        else if(uname!==name && upass===pass)
        {
            alert("Incorrect username");
        }
        else{
            alert("Invalid credentials, login failed");
        }

    }


    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleClick}>
            <label>Name:   </label>
            <input type="text" id="uname" required/>
            <label>Password:</label>
            <input type="password" id="upass" required/>
            <button type="submit" id="btn">Login</button>
            </form>
        </div>
    );
}