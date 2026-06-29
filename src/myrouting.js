import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { WelcomeHome } from './WelcomeHome';   
import { Loginpage } from './Loginusingstate';         
import { Signup2 } from './Signup2';              
import { Dashboard } from './Dashboard';         

export function App9() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif', color: '#111827' }}>
                Simple Routing Demo
            </h1>
                <nav style={{ textAlign: 'center', marginBottom: '20px', fontSize: '16px' }}>
                <Link to="/" style={linkStyle}>Home</Link> |{" "}
                <Link to="/login" style={linkStyle}>Login</Link> |{" "}
                <Link to="/signup" style={linkStyle}>Signup</Link>
            </nav>
            
            <Routes>
                <Route path="/" element={<WelcomeHome />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/signup" element={<Signup2/>} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

const linkStyle = {
    margin: '0 10px',
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: '600'
};
