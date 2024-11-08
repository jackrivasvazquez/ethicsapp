// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        
        // Save user credentials to localStorage
        if (email && password) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            alert("Sign up successful. Please log in.");
            navigate('/login');
        } else {
            alert("Please enter valid details.");
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
                <h2>Create New Account</h2>
                <form onSubmit={handleSignUp}>
                    <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Sign Up</Button>
                </form>
                <Link to="/login" style={{ color: colors.primary, textDecoration: 'none', marginTop: spacing.medium, display: 'block' }}>
                    Already Registered? Log in here.
                </Link>
            </Card>
        </Container>
    );
}

export default SignUp;
