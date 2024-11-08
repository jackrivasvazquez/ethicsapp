// src/pages/ForgotPassword.js
import React from 'react';
import { Link } from 'react-router-dom';
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

function ForgotPassword() {
    return (
        <Container>
             <NavBar>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/ask-question">Ask Questions</NavLink> 
                    <NavLink to="/about-us">About Us</NavLink>
                </NavBar>
            <Card>
                <h2>Forgot Password</h2>
                <form>
                    <Input type="email" placeholder="Enter email" />
                    <Button type="submit">Submit</Button>
                </form>
                <Link to="/login" style={{ color: colors.primary, textDecoration: 'none', marginTop: spacing.small, display: 'block' }}>
                    Back to log in? Click here
                </Link>
            </Card>
        </Container>
    );
}

export default ForgotPassword;
