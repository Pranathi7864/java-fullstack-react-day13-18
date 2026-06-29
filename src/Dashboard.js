import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Pull properties passed via your redirection paths safely
    const username = location.state?.username || "User";
    const actionType = location.state?.type || "Action";

    return (
        <div style={{ textAlign: 'center', marginTop: '60px', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'inline-block', padding: '30px', border: '1px solid #10b981', backgroundColor: '#ecfdf5', borderRadius: '12px' }}>
                <h2 style={{ color: '#065f46', margin: 0 }}>✓ {actionType} Successful!</h2>
                <p style={{ margin: '15px 0' }}>Welcome, active user profile: <strong>{username}</strong></p>
                <button onClick={() => navigate('/')} style={{ padding: '8px 16px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Logout System
                </button>
            </div>
        </div>
    );
};
