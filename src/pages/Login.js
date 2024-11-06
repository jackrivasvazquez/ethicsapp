// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/about-us');
        } else {
            alert("Please enter valid credentials.");
        }
    };

    return (
        <div>
            <h2>Log-In For Existing Users</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
            <Link to="/forgot-password">Forgot Password? Click here.</Link>
            <br />
            <Link to="/">Go Back to Home</Link>
        </div>
    );
}

export default Login;
