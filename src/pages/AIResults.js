import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

const NavBar = styled.div`
    width: 100%;
    padding: ${spacing.small};
    background-color: ${colors.primary};
    color: white;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin-left: 20px;
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
    min-height: 200px;
`;

const Title = styled.h2`
    margin-bottom: ${spacing.medium};
`;

const Text = styled.p`
    margin-bottom: ${spacing.large};
`;

function AIResults() {
    const location = useLocation();
    const { question } = location.state || {};

    console.log("Received question in AIResults:", question); // Debugging line

    return (
        <Container>
            <NavBar>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/signup">Sign Up</NavLink>
                <NavLink href="/login">Log In</NavLink>
                <NavLink href="/ask-question">Ask Questions</NavLink>
                <NavLink href="/about-us">About Us</NavLink>
            </NavBar>

            <Card>
                <Title>AI Response</Title>
                {question ? (
                    <Text>Response for: "{question}"</Text>
                ) : (
                    <Text>No question provided.</Text>
                )}
            </Card>
        </Container>
    );
}

export default AIResults;
