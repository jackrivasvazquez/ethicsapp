// src/pages/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

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
    padding: ${spacing.medium};
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
    return (
        <Container>
            <Card>
                <h2>Create New Account</h2>
                <form>
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Button type="submit">Sign Up</Button>
                </form>
                <Link to="/login" style={{ color: colors.primary, textDecoration: 'none', marginTop: spacing.small, display: 'block' }}>
                    Already Registered? Log in here.
                </Link>
                <Link to="/" style={{ color: colors.primary, textDecoration: 'none', marginTop: spacing.small, display: 'block' }}>
                    Go Back to Home
                </Link>
            </Card>
        </Container>
    );
}

export default SignUp;
