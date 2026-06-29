import React from 'react'

export const Signup = () => {
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const mypass=document.getElementById("pass").value;
        const copass=document.getElementById("cpass").value;
        
        
        if(mypass.length<8 || mypass.length>15)
        {
           
              document.getElementById("passp").textContent="Password length should be between 8-15 characters"
        }
        else if(!(/[0-9]/.test(mypass)))
        {
            
            document.getElementById("passp").textContent="Password must include a digit (0-9)"
        }
        else if(!(/[!@#$%^&*]/.test(mypass)))
        {
           
              document.getElementById("passp").textContent="Password must contain one special character"
        }
        else if(mypass!==copass)
        {
            document.getElementById("passp").textContent="Confirm password doesnt match with the password entered"
        }
        else{
        alert("Successful!")}

    }
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <input type="text" id="name" placeholder="Enter your name" required/> 
                       
                    </tr>
                    <tr>
                        <input type="email" id="email" placeholder='Enter your email id' required/>
                    </tr>
                    <tr>
                        <input type="text" id="num" placeholder="Enter your phone number"/>

                    </tr>
                    <tr>
                        <input type="text" id="uname" placeholder='Enter your username to be displayed' required/>
                    </tr>
                    <tr>
                        <input type="password" id='pass' placeholder="......" required/>
                        
                    </tr>
                    <tr>
                        <input type="password" id='cpass' placeholder="......" required/>
                        <p id="passp"></p>
                    </tr>
                    <tr>
                        <center> <button type="submit">Click</button></center>
                    </tr>
                </table>
                
            </form>
    
    </div>
  )
}
