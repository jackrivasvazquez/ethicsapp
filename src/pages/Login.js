// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

// Define the NavBar styled component
const NavBar = styled.div`
    width: 100%;
    padding: ${spacing.small};
    background-color: ${colors.primary};
    color: white;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    justify-content: flex-start;  // Align links to the left
    padding-left: 20px;  // Add left padding to the NavBar for spacing
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin-right: 20px;  // Space links apart on the right side
    &:hover {
        text-decoration: underline;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${colors.background};
    padding: ${spacing.large};
`;

const Card = styled.div`
    width: 350px;
    padding: ${spacing.large};
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    text-align: center;
`;

const Input = styled.input`
    width: 100%;
    padding: ${spacing.small};
    margin: ${spacing.small} 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    background-color: ${colors.primary};
    color: white;
    padding: 11px 18px;
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: ${spacing.medium};

    &:hover {
        background-color: ${colors.secondary};
    }
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve stored credentials from localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        // Check if the entered credentials match the stored credentials
        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            navigate('/about-us');
        } else {
            alert("Invalid credentials. Please check your email and password or sign up.");
        }
    };

    return (
        <Container>
            <NavBar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/ask-question">Ask Questions</NavLink> 
                <NavLink to="/about-us">About Us</NavLink>
            </NavBar>
            <Card>
                <h2>Log In For Existing Users</h2>
                <form onSubmit={handleLogin}>
                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Log In</Button>
                </form>
                <Link to="/forgot-password" style={{ color: colors.primary, textDecoration: 'none', marginTop: spacing.medium, display: 'block' }}>
                    Forgot Password? Click here.
                </Link>
            </Card>
        </Container>
    );
}

export default Login;
