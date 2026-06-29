import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Loginpage = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const name = "pran";
    const pswd = "prana";

    const handleClick = (e) => {
        e.preventDefault(); // Prevents default page reboots
        
        if (user === name && pass === pswd) {
            // Forward user to success portal and pass their name in the route history state
            navigate('/dashboard', { state: { username: user, type: 'Login' } });
        } else {
            alert("Login Failed: Invalid credentials");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', fontFamily: 'sans-serif' }}>
            <form onSubmit={handleClick} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '260px' }}>
                <h3>Login</h3>
                <div style={{ marginBottom: '10px' }}>
                    <label>Name: </label>
                    <input type="text" 
                    value={user} onChange={(e) => setUser(e.target.value)} 
                    required style={{ width: '100%', padding: '6px', marginTop: '4px' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Pass: </label>
                    <input type="password" 
                    value={pass} onChange={(e) => setPass(e.target.value)} 
                    required style={{ width: '100%', padding: '6px', marginTop: '4px' }} />
                </div>
                <button type="submit" 
                id="btn" 
                style={{ width: '100%', padding: '8px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Click</button>
            </form>
        </div>
    );
};
