import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WelcomeHome = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
            <h2>Welcome to our System Hub</h2>
            <p>Select an option below or use the top navigation panel to start.</p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={() => navigate('/login')} style={btnStyle.login}>Login Profile</button>
                <button onClick={() => navigate('/signup')} style={btnStyle.signup}>Create Account</button>
            </div>
        </div>
    );
};

const btnStyle = {
    login: { padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
    signup: { padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
};
